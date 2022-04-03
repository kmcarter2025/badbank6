function AllData() {
    const [data, setData] = React.useState([]);
    const loggedInUser = React.useContext(UserContext)

    return (
        <>
            <h5>All Data in Store:</h5>
            <div>
                <Card
                    bgcolor="secondary"
                    header={loggedInUser.name}
                    body={<div>
                        <p>Email: {loggedInUser.email}</p>
                        <p>Password: {loggedInUser.password}</p>
                        <p>Balance: ${loggedInUser.balance}</p>
                    </div>}
                />
            </div>
        </>
    );
}
