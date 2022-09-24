const Welcome = () => {
  return (
    <>
      <div id="sidebar">
        teste
        <h2>
          React Router Contactsasdf sfdfasdf asf asd fas df asd fsa df asdf
        </h2>
        <div>
          <form id="search-form" role="search">
            <h2>asdfasdfdfdfd sdf ds fd</h2>
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default Welcome;
