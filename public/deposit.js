function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ?
        <DepositForm setShow={setShow} setStatus={setStatus} /> :
        <DepositMsg setShow={setShow} setStatus={setStatus} />}
    />
  )
}

function DepositMsg(props) {
  return (<>
    <h5>Success</h5>
    <button type="submit"
      className="btn btn-light"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
      Deposit again
    </button>
  </>);
}

function DepositForm(props) {
  const [amount, setAmount] = React.useState('');
  const loggedInUser = React.useContext(UserContext)

  function handle() {
    fetch(`/account/update/${loggedInUser.email}/${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          props.setStatus('');
          props.setShow(false);
          if (amount) {
            loggedInUser.balance += parseInt(amount)
          }
          console.log('JSON:', data);
        } catch (err) {
          props.setStatus('Deposit failed')
          console.log('err:', text);
        }
      });
  }

  return (<>
    Balance<br />
    <h3>${loggedInUser.balance}</h3>

    Amount<br />
    <input type="number"
      className="form-control"
      placeholder="Enter amount"
      value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />

    <button type="submit"
      className="btn btn-light"
      onClick={handle}>Deposit</button>

  </>);
}