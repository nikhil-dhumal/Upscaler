import { faCircleDot, faDatabase, faDownload, faUserGear, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Princing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose The Right Plan For You</h2>
      <p className="pricing-subtitle">Choose a plan and enjoy an exceptional user experience instantly</p>
      <div className="plans">
        <div className="card">
          <h3 className="card-title">Free Forever</h3>
          <h5 className="card-subtitle">$0<span className="x-small"> / credit</span></h5>
          <hr />
          <div className="card-btn">Sign Up For Free</div>
          <div className="card-details">
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faDatabase} />
              3 free credits
            </div>
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faDownload} />
              3 free downloads
            </div>
          </div>
          <div className="card-recommend">
            <hr />
            <span style={{ display: "inline-block" }} className="div">Recommended for personal use and platform analysis.</span>
            <span className="underline">Note</span>: Get 3 free credits along with 3 free downloads every month to try the platform.
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Subscription Plan</h3>
          <h5 className="card-subtitle">$0.10<span className="x-small"> / credit</span></h5>
          <hr />
          <div className="card-btn">Subscribe Now</div>
          <div className="card-details">
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>10 Credits</p><p>$9</p>
              </div>
            </div>
            <div className="detail-subtext">$0.90/credit</div>
            <hr />
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>100 Credits</p><p>$19</p>
              </div>
            </div>
            <div className="detail-subtext">$0.19/credit</div>
            <hr />
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>300 Credits</p><p>$29</p>
              </div>
            </div>
            <div className="detail-subtext">$0.10/credit</div>
          </div>
          <div className="card-recommend">
            <hr />
            <span style={{ display: "inline-block" }} className="div">Recommended for business use.</span>
            <span className="underline">Note</span>: Your subscription will automatically renew and payment will be auto deducted at the renewal date.
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Pay as you go</h3>
          <h5 className="card-subtitle">$0.10<span className="x-small"> / credit</span></h5>
          <hr />
          <div className="card-btn">Buy Now</div>
          <div className="card-details">
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>30 Credits</p><p>$19</p>
              </div>
            </div>
            <div className="detail-subtext">$0.63/credit</div>
            <hr />
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>100 Credits</p><p>$49</p>
              </div>
            </div>
            <div className="detail-subtext">$0.49/credit</div>
            <hr />
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faCircleDot} />
              <div className="detail-text">
                <p>300 Credits</p><p>$99</p>
              </div>
            </div>
            <div className="detail-subtext">$0.33/credit</div>
          </div>
          <div className="card-recommend">
            <hr />
            <span style={{ display: "inline-block" }} className="div">Renew your credits instantly for an uninterrupted experience.</span>
            <span className="underline">Note</span>: Credits available for use anytime within 1 year of purchase. Non-refundable.
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Enterprise Plan</h3>
          <h5 className="card-subtitle">Need custom solutions?</h5>
          <hr />
          <div className="card-btn">Talk to Sales</div>
          <div className="card-details">
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faUserTie} />
              Schedule a Demo with our experts
            </div>
            <div className="card-detail">
              <FontAwesomeIcon className="detail-icon" icon={faUserGear} />
              Get quotes tailored to your requirements
            </div>
          </div>
          <div className="card-recommend">
            <hr />
            <span style={{ display: "inline-block" }} className="div">Recommended for Enterprises.</span>
            <span className="underline">Note</span>: Book 1:1 sessions with our product experts and align your business strategies with the latest industry trends.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Princing