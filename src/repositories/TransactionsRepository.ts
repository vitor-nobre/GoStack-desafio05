import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {
    // TODO
    let income = 0

    let outcome = 0

    this.transactions.map(transaction => {
      if(transaction.type === 'income'){
        income += transaction.value
      }else {
        outcome += transaction.value
      }
    })

    const total = income - outcome

    const balance: Balance = { income, outcome, total}

    return balance
  }

  public create({ title, type, value }: Omit<Transaction, 'id'>): Transaction {

    const transaction = new Transaction({ title, value, type })

    this.transactions.push(transaction)

    return transaction
  }
}

export default TransactionsRepository;
