function AllData() {
    const loggedInUser = React.useContext(UserContext)
    const { useHistory } = ReactRouterDOM
    const history = useHistory()

    function logoutUser() {
        loggedInUser.name = ''
        loggedInUser.email = ''
        loggedInUser.password = ''
        loggedInUser.balance = 0
        history.push('/login')
    }

    return (
        <>
            <div>
                <Card
                    bgcolor="secondary"
                    header={loggedInUser.name}
                    body={<div>
                        <p>Email: {loggedInUser.email}</p>
                        <p>Password: {loggedInUser.password}</p>
                        <p>Balance: ${loggedInUser.balance}</p>
                        <button type="submit" className="btn btn-light" onClick={logoutUser}>Logout</button>
                    </div>}
                />
            </div>
        </>
    );
}
