import "./About.css";
function About() {
  return (
    <>
      <div className="about-page" id="abouts">
        <div className="box-1">
          <i class="ri-briefcase-fill"></i>
          <h1 className="about-heading">Business Services</h1>
          <p className="about-info">
            Selecting optimal couriers based on cost, speed, and item specifics.
            Streamlining dispatch and tracking, giving you real-time shipment
            visibility. Managing returns and exceptions, ensuring smooth
            delivery experiences.
          </p>
        </div>

        <div className="box-2">
          <i class="ri-building-4-fill"></i>
          <h1 className="about-heading">Office to office services</h1>
          <p className="about-info">
            Tired of managing multiple couriers for office deliveries? Our
            service simplifies it! We handle everything: pickup, selection of
            fastest/cheapest option, and real-time tracking. Plus, we manage
            returns and issues, ensuring smooth document and package flow
            between your offices. Focus on your business, leave the deliveries
            to us.
          </p>
        </div>

        <div className="box-3">
          <i class="ri-truck-fill"></i>
          <h1 className="about-heading">Express Services</h1>
          <p className="about-info">
            Speed is King: Express services prioritize speed, often offering
            same-day, next-day, or 2-day delivery within specific regions. Wide
            Coverage: They have extensive networks, reaching across cities,
            states, and even internationally depending on the provider. Multiple
            Options: Choose from various service levels at different price
            points, depending on your urgency and budget. 
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
