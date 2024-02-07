function Footer(props) {
  return (
    <div className="Footer">
      <ul>
        <li>
          <img className="Icon-in-Footer" src="/assets/email.png"></img>
          <a href={"mailto:" + props.email}>{props.email}</a>
        </li>
        <li>
          <img className="Icon-in-Footer" src="/assets/phone.png"></img>
          Contato:<br></br>
          {props.phone}
        </li>
        <li>
          <button>
            <img className="Icon-in-Footer" src="/assets/my-account.png"></img>
            Minha conta
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
