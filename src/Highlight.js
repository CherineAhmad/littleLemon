// import Card from "./Card";
function Highlight() {
    return( 
        <section className="highlight">
            <div className="highlight-header">
                <h2 className="title">This week’s specials!</h2>
                <button className="primary-btn">Online Menu</button>
            </div>
            <div className="highlight-body">
                <div className="card">
                    <img src="/assets/greek salad.jpg" alt="Greek Salad" className="card-image" />
                    <div className="card-content">
                        <div className="card-title card-title-text">
                            <div>Greek Salad</div>
                            <div style={{ color: 'var(--error-500)' }}> $12.99</div>
                        </div>
                        <p className="paragraph">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <div className="card-button">
                            <button className="tertiary-btn">Order a delivery</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/assets/bruchetta.svg" alt="bruchetta" className="card-image" />
                    <div className="card-content">
                        <div className="card-title card-title-text">
                            <div>Bruchetta</div>
                            <div style={{ color: 'var(--error-500)' }}> $5.99</div>
                        </div>
                        <p className="paragraph">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil </p>
                        <div className="card-button">
                            <button className="tertiary-btn">Order a delivery</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/assets/lemon dessert.jpg" alt="lemon dessert" className="card-image" />
                    <div className="card-content">
                        <div className="card-title card-title-text">
                            <div>Lemon Dessert</div>
                            <div style={{ color: 'var(--error-500)' }}> $5.00</div>
                        </div>
                        <p className="paragraph">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                        <div className="card-button">
                            <button className="tertiary-btn">Order a delivery</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlight;

