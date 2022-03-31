function AllData() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <h5>All Data in Store:</h5>
            {data.map(user => {
                return (
                    <div>
                        <Card
                            bgcolor="secondary"
                            header={user.name}
                            body={<div>
                                <p>Email: {user.email}</p>
                                <p>Password: {user.password}</p>
                                <p>Balance: ${user.balance}</p>
                            </div>}
                        />
                    </div>
                )
            })}
        </>
    );
}
