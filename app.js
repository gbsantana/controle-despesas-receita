new Vue({
    el: '#app',
    data() {
        return {
            transactions: [],
            newTransaction: { description: '', amount: 0 },
            currentPage: 1,
            transactionsPerPage: 5,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.transactions.length / this.transactionsPerPage);
        },
        paginatedTransactions() {
            const start = (this.currentPage - 1) * this.transactionsPerPage;
            return this.transactions.slice(start, start + this.transactionsPerPage);
        }
    },
    methods: {
        addTransaction() {
            if (!this.newTransaction.description || this.newTransaction.amount === 0) return;
            this.transactions.push({ ...this.newTransaction });
            this.newTransaction = { description: '', amount: 0 };
        },
        removeTransaction(index) {
            const actualIndex = (this.currentPage - 1) * this.transactionsPerPage + index;
            this.transactions.splice(actualIndex, 1);
        },
        calculateBalance(index) {
            let balance = 0;
            for (let i = 0; i <= index; i++) {
                balance += this.transactions[i].amount;
            }
            return balance;
        },
        formatAmount(amount) {
            return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        moveTransaction(index, direction) {
            const actualIndex = (this.currentPage - 1) * this.transactionsPerPage + index;
            const newIndex = actualIndex + direction;

            // Ensure we are within bounds
            if (newIndex < 0 || newIndex >= this.transactions.length) return;

            // Swap transactions
            const temp = this.transactions[actualIndex];
            Vue.set(this.transactions, actualIndex, this.transactions[newIndex]);
            Vue.set(this.transactions, newIndex, temp);

            // Forçar Vue a re-renderizar a lista atualizada
            this.transactions = [...this.transactions];
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
});
