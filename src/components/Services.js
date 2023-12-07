import Card from "../components/Card";



function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Web development builds and maintains websites using coding languages like HTML, CSS, and JavaScript. It focuses on creating user-friendly, secure, and high-performing sites for an engaging online experience " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="E-commerce services power online buying and selling, handling everything from setting up digital stores to managing payments, inventory, and customer support for a seamless shopping experience" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Cybersecurity shields digital systems from attacks, preserving data integrity and preventing unauthorized access. It safeguards sensitive information and ensures the reliability of online operations" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
