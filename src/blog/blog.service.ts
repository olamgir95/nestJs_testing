import { Injectable } from "@nestjs/common";
import { BlogDto } from "./dto/blog.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Blog, BlogDocument } from "./blog.schema";
import { Model } from "mongoose";

@Injectable()
export class BlogService {
  blogs: BlogDto[];
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {
    this.blogs = [
      {
        title: "Blog 1",
        excerpt: "NESTJS",
        description: "Blog 1 Description",
      },
      {
        title: "Blog 1",
        excerpt: "NEXTJS",
        description: "Blog 2 Description",
      },
      {
        title: "Blog 1",
        excerpt: "NUXTJS",
        description: "Blog 3 Description",
      },
    ];
  }
  async getAllBlogs() {
    return this.blogModel.find({});
  }
  async create(dto: BlogDto) {
    return this.blogModel.create(dto);
  }
  async getById(id: string) {
    return this.blogModel.findById(id);
  }
  async update(id: string, dto: BlogDto) {
    return this.blogModel.findByIdAndUpdate(id, dto, { new: true });
  }
  async delete(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
