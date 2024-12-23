import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CreatetransactionDTO, GetDashBoarDTO, GetFinancialEvolutionDTO, IndexTransactionsDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transactions.entity";
import { ApppError } from "../errors/app.error";
import { Balance } from "../entities/balance.entity";
import { Expense } from "../entities/expense.entity";

export class TransactionsService {
    constructor(private transactionsRepository: TransactionsRepository, private categoriesRepository: CategoriesRepository) { }

    async create({ title, type, date, categoryId, amount }: CreatetransactionDTO): Promise<Transaction> {

        const category = await this.categoriesRepository.findById(categoryId)

        if (!category) {
            throw new ApppError('Category does not exists', StatusCodes.NOT_FOUND)
        }
        const transaction = new Transaction({
            title,
            type,
            date,
            category,
            amount,

        })

        const createTransaction = await this.transactionsRepository.create(transaction)

        return createTransaction
    }

    async index(filters: IndexTransactionsDTO): Promise<Transaction[]> {
        const transactions = await this.transactionsRepository.index(filters)

        return transactions
    }

    async getDashbord({ beginDate, endDate }: GetDashBoarDTO): Promise<{ balance: Balance, expenses: Expense[] }> {

        let [balance, expenses] = await Promise.all([
            this.transactionsRepository.getBalance({ beginDate, endDate }),

            await this.transactionsRepository.getExpense({
                beginDate, endDate
            })
        ])


        if (!balance) {
            balance = new Balance({
                _id: null,
                incomes: 0,
                expenses: 0,
                balance: 0
            })
        }

        return { balance, expenses }
    }

    async getFinancialEvolution({ year }: GetFinancialEvolutionDTO): Promise<Balance[]> {
        const financialEvolution = await this.transactionsRepository.getFinancialEvolution({ year })

        return financialEvolution
    }
}