import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
  Delete,
  Put,
  Body,
  Post,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly service: BudgetService) {}

  @Get()
  async list(
    @Query('userId') userId: string,
    @Query('page') page = '1',
    @Query('perPage') perPage = '25',
  ) {
    const result = await this.service.list(
      userId,
      Number(page),
      Number(perPage),
    );
    return result; // siempre 200 con data array (vacío si no hay)
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const budget = await this.service.findById(id);
    if (!budget) {
      throw new NotFoundException('Budget not found');
    }
    return budget;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string, @Query('userId') userId: string) {
    const deleted = await this.service.deleteById(id, userId);
    if (!deleted) {
      throw new NotFoundException('Budget not found');
    }
    return { ok: true };
  }

  @Post()
  async create(
    @Body() body: CreateBudgetDto,
  ) {
    const created = await this.service.create(body as any);
    return created;
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Query('userId') userId: string,
    @Body() body: UpdateBudgetDto,
  ) {
    const updated = await this.service.updateById(id, userId, body);
    if (!updated) {
      throw new NotFoundException('Budget not found');
    }
    return updated;
  }
}
