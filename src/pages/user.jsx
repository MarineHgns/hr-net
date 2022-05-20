import { transactionData } from "../data/data"
import TransactionCard from "../components/transactionCard"

function UserPage() {
    return (
        <main className="main bg-dark">
          <div class="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
              <button class="edit-button">Edit Name</button>
          </div>
            <h2 className="sr-only">Accounts</h2>
              {transactionData.map(({ id, title, amount, description }) => {
                return (
                  <TransactionCard
                    key={id}
                    title={title}
                    amount={amount}
                    description={description}
                  />
                );
              })}
          </main>
    )
}

export default UserPage