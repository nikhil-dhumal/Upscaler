import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCirclePlus,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons"
import { faSquareWebAwesome } from "@fortawesome/free-brands-svg-icons"

const GuideSection = () => {
  return (
    <section className="guide-section">
      <FontAwesomeIcon className="guide-path-icon" icon={faCirclePlus} />
      <FontAwesomeIcon className="guide-path-icon arrow" icon={faArrowRightLong} />
      <FontAwesomeIcon className="guide-path-icon" icon={faSquareWebAwesome} />
      <FontAwesomeIcon className="guide-path-icon arrow" icon={faArrowRightLong} />
      <FontAwesomeIcon className="guide-path-icon" icon={faMagnifyingGlass} />
      <FontAwesomeIcon className="guide-path-icon arrow" icon={faArrowRightLong} />
      <FontAwesomeIcon className="guide-path-icon" icon={faDownload} />
    </section>
  )
}

export default GuideSection