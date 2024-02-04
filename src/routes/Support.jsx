const Support = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <form action="#">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="Message" cols="30" rows="10" required></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Support;
