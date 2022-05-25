import { transactionData } from "../data/data"
import TransactionCard from "../components/transactionCard"
import { useEffect } from "react"
import { selectJWT } from "../utils/selectors"
import { useDispatch, useSelector } from "react-redux"
import ApiCalls from "../services/Api"
import { setUserData } from "../utils/reducers"

function UserPage() {
  let dispatch = useDispatch()
  let JWT = useSelector(selectJWT)

  useEffect(() => {
      async function getUserProfile() {
          const response = await new ApiCalls().getUserProfileData(JWT)
          console.log(response.data.body)
          dispatch(setUserData(response.data.body))
          console.log(setUserData);
          return response
      }
      getUserProfile() 
  }, [JWT, dispatch])
    return (
        <main className="main bg-dark">
            <h2 className="sr-only">Accounts</h2>
              {transactionData.map(({ id, title, amount, description }) => {
                return (
                  <TransactionCard key={id} title={title} amount={amount} description={description}/>
                );
              })}
        </main>
    )
}

export default UserPage