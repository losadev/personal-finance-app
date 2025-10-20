import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class BudgetService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lista budgets con paginación básica.
   * Retorna { data, meta } donde data es un array (vacío si no hay) y meta contiene total/page/perPage
   */
  async list(userId: string, page = 1, perPage = 25) {
    const take = perPage;
    const skip = (page - 1) * perPage;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.budget.findMany({
        where: { userId },
        skip,
        take,
        orderBy: { id: 'desc' },
      }),
      this.prisma.budget.count({ where: { userId } }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        perPage,
      },
    };
  }

  /**
   * Busca un budget por id. Devuelve null si no existe.
   */
  async findById(id: string) {
    return this.prisma.budget.findUnique({ where: { id } });
  }

  /**
   * Elimina un budget por id verificando que pertenezca al userId proporcionado.
   * Devuelve el registro eliminado o null si no existe.
   * Lanza ForbiddenException si el budget existe pero pertenece a otro usuario.
   */
  async deleteById(id: string, userId: string) {
    const existing = await this.prisma.budget.findUnique({ where: { id } });
    if (!existing) return null;
    if (existing.userId !== userId) {
      throw new ForbiddenException('You are not allowed to delete this budget');
    }

    return this.prisma.budget.delete({ where: { id } });
  }

  /**
   * Actualiza un budget (category, max_spend, theme) si pertenece al userId.
   * Devuelve el registro actualizado o null si no existe.
   */
  async updateById(id: string, userId: string, data: { category?: string; max_spend?: string; theme?: string }) {
    const existing = await this.prisma.budget.findUnique({ where: { id } });
    if (!existing) return null;
    if (existing.userId !== userId) {
      throw new ForbiddenException('You are not allowed to update this budget');
    }

    return this.prisma.budget.update({ where: { id }, data });
  }
}
