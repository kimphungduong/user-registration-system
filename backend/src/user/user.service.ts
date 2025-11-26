import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new this.userModel({
        email,
        password: hashedPassword,
      });

      await newUser.save();

      // Return user without password
      return {
        message: 'User registered successfully',
        user: {
          id: newUser._id,
          email: newUser.email,
          createdAt: newUser.createdAt,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to register user');
    }
  }
}