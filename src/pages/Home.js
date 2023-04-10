import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onArtistCollectorsClick = useCallback(() => {
    navigate("/author-collector");
  }, [navigate]);

  const onExhibitionTextClick = useCallback(() => {
    navigate("/collections");
  }, [navigate]);

  const onExploreText3Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onMarketTextClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="home1">
      <footer className="footer-container">
        <div className="footer1">
          <div className="copyright-2023-wrapped1">{`Copyright 2023 Wrapped Ordinals, Inc. `}</div>
          <div className="social-media2">
            <div className="twitter1">Twitter</div>
            <div className="instagram1">Instagram</div>
            <div className="discord1">Discord</div>
            <div className="social-media3">Social Media</div>
          </div>
          <div className="comunity2">
            <div className="become-a-partner1">Become a Partner</div>
            <div className="faq-container">
              <div className="faq1">FAQ</div>
            </div>
            <div className="collections1">Collections</div>
            <div className="token1">Token</div>
            <div className="social-media3">Comunity</div>
          </div>
          <div className="about2">
            <div className="support1">Support</div>
            <div className="privacy-policy1">Privacy Policy</div>
            <div className="terms-of-service1">Terms of Service</div>
            <div className="about-us1">About Us</div>
            <div className="about3">About</div>
          </div>
          <div className="logo1">
            <div className="wrap-your-btc1">
              Wrap your BTC ordinals to enable trading on Opensea
            </div>
            <img className="logo-1-icon2" alt="" src="/logo-1@2x.png" />
          </div>
        </div>
      </footer>
      <section className="cta-wrapper" id="loop">
        <div className="cta">
          <div className="container13" />
          <div className="email">
            <button className="button2">
              <div className="medium1">Subscribe</div>
            </button>
            <input className="form" type="text" placeholder="Your Email" />
          </div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
          <div className="stay-in-the">Stay in the loop</div>
        </div>
      </section>
      <div className="popular-articles">
        <div className="nft-21">
          <div className="card1" />
          <div className="button3">
            <div className="large1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor iyfyif incididunt ut labore et dolore magna bm,n
              k/aliquaLorem ipsum dolor sit amet, cardd khv
            </div>
          </div>
          <div className="profile14">
            <b className="cameron-williamson12">Cameron Williamson</b>
            <img
              className="image-placeholder-icon13"
              alt=""
              src="/image-placeholder2.svg"
            />
          </div>
          <div className="product-update-activity">
            Product Update: Activity Feed + New Ways to Discover
          </div>
          <div className="image-placeholder13" />
        </div>
        <div className="nft-20">
          <div className="card1" />
          <div className="button3">
            <div className="large1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor iyfyif incididunt ut labore et dolore magna bm,n
              k/aliquaLorem ipsum dolor sit amet, cardd khv
            </div>
          </div>
          <div className="profile14">
            <b className="cameron-williamson12">Cameron Williamson</b>
            <img
              className="image-placeholder-icon13"
              alt=""
              src="/image-placeholder11.svg"
            />
          </div>
          <div className="product-update-activity">
            Product Update: Activity Feed + New Ways to Discover
          </div>
          <div className="image-placeholder13" />
        </div>
        <div className="nft-17">
          <div className="card1" />
          <div className="button3">
            <div className="large1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor iyfyif incididunt ut labore et dolore magna bm,n
              k/aliquaLorem ipsum dolor sit amet, cardd khv
            </div>
          </div>
          <div className="profile14">
            <b className="cameron-williamson12">Cameron Williamson</b>
            <img
              className="image-placeholder-icon13"
              alt=""
              src="/image-placeholder21.svg"
            />
          </div>
          <div className="product-update-activity">
            Product Update: Activity Feed + New Ways to Discover
          </div>
          <div className="image-placeholder13" />
        </div>
        <div className="nft-23">
          <div className="card1" />
          <div className="button6">
            <div className="large1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor iyfyif incididunt ut labore et dolore magna bm,n
              k/aliquaLorem ipsum dolor sit amet, cardd khv
            </div>
          </div>
          <div className="profile14">
            <b className="cameron-williamson12">Cameron Williamson</b>
            <img
              className="image-placeholder-icon13"
              alt=""
              src="/image-placeholder3.svg"
            />
          </div>
          <div className="product-update-activity">
            Product Update: Activity Feed + New Ways to Discover
          </div>
          <div className="image-placeholder13" />
        </div>
        <div className="article-1">
          <div className="container14" />
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="profile18">
            <b className="cameron-williamson16">Cameron Williamson</b>
            <img
              className="image-placeholder-icon17"
              alt=""
              src="/image-placeholder4.svg"
            />
          </div>
          <div className="product-update-personalized-container">
            <span className="product-update-personalized">{`Product Update: Personalized Activity Feed `}</span>
            <b className="product-update">Product Update</b>
          </div>
          <div className="image-placeholder17" />
        </div>
        <div className="button7">
          <b className="large5">View All Articles</b>
        </div>
        <div className="popular-articles1">Popular Articles</div>
      </div>
      <section className="popular-artist-wrapper">
        <div className="popular-artist">
          <div className="artist-9">
            <div className="bessiecr">@BessieCR</div>
            <b className="bessie-cooper">Bessie Cooper</b>
            <img
              className="image-placeholder-icon18"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">09</div>
          </div>
          <div className="artist-8">
            <div className="jacobjs">@JacobJS</div>
            <b className="jacob-jones">Jacob Jones</b>
            <img
              className="image-placeholder-icon19"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">08</div>
          </div>
          <div className="artist-7">
            <div className="estherh">@EstherH</div>
            <b className="esther-howard">Esther Howard</b>
            <img
              className="image-placeholder-icon20"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">07</div>
          </div>
          <div className="artist-6">
            <div className="cameron">@Cameron</div>
            <b className="cameron-williamson17">Cameron Williamson</b>
            <img
              className="image-placeholder-icon21"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">06</div>
          </div>
          <div className="artist-5">
            <div className="jenny">@Jenny</div>
            <b className="jenny-wilson">Jenny Wilson</b>
            <img
              className="image-placeholder-icon22"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">05</div>
          </div>
          <div className="artist-4">
            <div className="janec">@JaneC</div>
            <b className="jane-cooper">Jane Cooper</b>
            <img
              className="image-placeholder-icon23"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">04</div>
          </div>
          <div className="artist-3">
            <div className="brookly">@Brookly</div>
            <b className="brooklyn-simmons">Brooklyn Simmons</b>
            <img
              className="image-placeholder-icon24"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">03</div>
          </div>
          <div className="artist-2">
            <div className="marvinwoy">@MarvinWoy</div>
            <b className="marvin-mckinney">Marvin McKinney</b>
            <img
              className="image-placeholder-icon25"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div">02</div>
          </div>
          <div className="artist-1">
            <div className="arlenemc">@ArleneMc</div>
            <b className="arlene-mccoy">Arlene McCoy</b>
            <img
              className="image-placeholder-icon26"
              alt=""
              src="/image-placeholder41.svg"
            />
            <div className="div8">01</div>
          </div>
          <button className="arrow-right">
            <div className="arrow-right-child" />
            <img
              className="arrows-arrow-right"
              alt=""
              src="/24--arrows--arrowright.svg"
            />
          </button>
          <button className="arrow-left">
            <div className="arrow-left-child" />
            <img
              className="arrows-arrow-right1"
              alt=""
              src="/24--arrows--arrowright1.svg"
            />
          </button>
          <div className="popular-artists">Popular ArtistS</div>
        </div>
      </section>
      <section className="explore-art-wrapper" id="explore-art">
        <div className="explore-art">
          <div className="nft">
            <div className="nft-18">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-171">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-16">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-15">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-14">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-13">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-12">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-11">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
            <div className="nft-10">
              <div className="card1" />
              <div className="button8">
                <div className="place-bid">Place Bid</div>
              </div>
              <div className="end-in">
                <b className="h-12m-32s">1 of 10</b>
                <b className="available">Available:</b>
              </div>
              <div className="current-bid">
                <b className="eth">0.4435 ETH</b>
                <b className="current-bid1">Current Bid :</b>
              </div>
              <div className="profile19">
                <b className="cameron-williamson18">Cameron Williamson</b>
                <img
                  className="image-placeholder-icon27"
                  alt=""
                  src="/image-placeholder5.svg"
                />
              </div>
              <div className="inscription12">Inscription</div>
              <div className="image-placeholder18" />
            </div>
          </div>
          <div className="category">
            <div className="button17">
              <div className="small">{`Filter & Sort`}</div>
              <div className="ui-filter">
                <div className="combined-shape">
                  <div className="filter" />
                  <div className="rectangle" />
                  <div className="rectangle1" />
                </div>
              </div>
            </div>
            <div className="button18">
              <div className="small">Memes</div>
            </div>
            <div className="button19">
              <div className="small">Music</div>
            </div>
            <div className="button20">
              <div className="small">Games</div>
            </div>
            <div className="button21">
              <div className="small">Photography</div>
            </div>
            <div className="button22">
              <div className="small">Art</div>
            </div>
            <div className="button23">
              <div className="small">All</div>
            </div>
          </div>
          <div className="explore-art1">Explore Art</div>
        </div>
      </section>
      <section className="live-auctions-wrapper" id="live-auctions">
        <div className="live-auctions">
          <div className="nft-7">
            <div className="card1" />
            <div className="button24">
              <div className="large6">Place a bid</div>
            </div>
            <div className="end-in">
              <b className="h-12m-32s">10h 12m 32s</b>
              <b className="ends-in">Ends in :</b>
            </div>
            <div className="current-bid">
              <b className="eth">0.4435 ETH</b>
              <b className="current-bid1">Current Bid :</b>
            </div>
            <div className="profile19">
              <b className="cameron-williamson18">Cameron Williamson</b>
              <img
                className="image-placeholder-icon27"
                alt=""
                src="/image-placeholder6.svg"
              />
            </div>
            <div className="inscription12">Inscription</div>
            <div className="image-placeholder18" />
          </div>
          <div className="nft-6">
            <div className="card1" />
            <div className="button24">
              <div className="large6">Place a bid</div>
            </div>
            <div className="end-in">
              <b className="h-12m-32s">10h 12m 32s</b>
              <b className="ends-in">Ends in :</b>
            </div>
            <div className="current-bid">
              <b className="eth">0.4435 ETH</b>
              <b className="current-bid1">Current Bid :</b>
            </div>
            <div className="profile19">
              <b className="cameron-williamson18">Cameron Williamson</b>
              <img
                className="image-placeholder-icon27"
                alt=""
                src="/image-placeholder6.svg"
              />
            </div>
            <div className="inscription12">Inscription</div>
            <div className="image-placeholder18" />
          </div>
          <div className="nft-1">
            <div className="card1" />
            <div className="button24">
              <div className="large6">Place bid</div>
            </div>
            <div className="end-in">
              <b className="h-12m-32s">10h 12m 32s</b>
              <b className="ends-in">Ends in :</b>
            </div>
            <div className="current-bid">
              <b className="eth">0.4435 ETH</b>
              <b className="current-bid1">Current Bid :</b>
            </div>
            <div className="profile19">
              <b className="cameron-williamson18">Cameron Williamson</b>
              <img
                className="image-placeholder-icon27"
                alt=""
                src="/image-placeholder6.svg"
              />
            </div>
            <div className="inscription12">Inscription</div>
            <div className="image-placeholder18" />
          </div>
          <button className="arrow-right1">
            <div className="arrow-right-item" />
            <img
              className="arrows-arrow-right"
              alt=""
              src="/24--arrows--arrowright2.svg"
            />
          </button>
          <button className="arrow-left1">
            <div className="arrow-left-item" />
            <div className="arrows-arrow-right3">
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </button>
          <div className="live-auctions1">Live auctions</div>
        </div>
      </section>
      <section className="header" id="banner">
        <div className="navbar1">
          <div className="textnavbar-menu">
            <div className="navbar-menu" />
          </div>
          <div className="textnavbar-menu">
            <div className="navbar-menu" />
          </div>
          <div className="textnavbar-menu">
            <div className="navbar-menu" />
          </div>
        </div>
        <img className="header-child" alt="" src="/vector-2.svg" />
        <div className="buttonregular">
          <div className="explore1">Wrap Your Ordinal</div>
        </div>
        <div className="discover-collect-and-sell-ex">
          <h2 className="wrapped-ordinals">
            <span className="wrapped-ordinals-txt-container">
              <span className="wrapped-ordinals1">{`Wrapped Ordinals         `}</span>
              <span className="span">{`     `}</span>
            </span>
          </h2>
          <div className="wrap-your-ordinal">
            Wrap your ordinal To Enable Trade on Open Sea
          </div>
        </div>
        <div className="vector-parent">
          <img className="group-child" alt="" src="/vector-5.svg" />
          <img className="group-item" alt="" src="/vector-6.svg" />
          <div className="cardhover-normaloff">
            <div className="card-bid-main">
              <div className="card-bid-main-child" />
              <div className="imageavatar-parent">
                <div className="imageavatar">
                  <div className="imageavatar-child" />
                </div>
                <div className="collection-name-parent">
                  <div className="collection-name">Collection Name</div>
                  <div className="collector-name">@collector_name</div>
                </div>
                <div className="imagelogo-crypto">
                  <div className="footer1">
                    <div className="imageavatar-item" />
                  </div>
                </div>
              </div>
              <div className="frame-parent">
                <div className="eth-parent">
                  <div className="eth12">2.45 ETH</div>
                  <div className="latest-bid">latest Bid</div>
                </div>
                <div className="eth-group">
                  <div className="eth13">0.45 ETH</div>
                  <div className="from"> from</div>
                </div>
                <div className="parent">
                  <div className="div9">$345.12</div>
                  <div className="div10">+12.45%</div>
                </div>
              </div>
              <div className="buttonregular1">
                <div className="explore2">Collect Now</div>
              </div>
            </div>
          </div>
          <div className="cardhover-normaloff1">
            <div className="card-bid-main">
              <div className="card-bid-main-child" />
              <div className="imageavatar-parent">
                <div className="imageavatar">
                  <div className="imageavatar-child" />
                </div>
                <div className="collection-name-parent">
                  <div className="collection-name">Collection Name</div>
                  <div className="collector-name">@collector_name</div>
                </div>
                <div className="imagelogo-crypto">
                  <div className="footer1">
                    <div className="imageavatar-item" />
                  </div>
                </div>
              </div>
              <div className="frame-parent">
                <div className="eth-parent">
                  <div className="eth12">2.45 ETH</div>
                  <div className="latest-bid">latest Bid</div>
                </div>
                <div className="eth-group">
                  <div className="eth13">0.45 ETH</div>
                  <div className="from"> from</div>
                </div>
                <div className="parent">
                  <div className="div9">$345.12</div>
                  <div className="div10">+12.45%</div>
                </div>
              </div>
              <div className="buttonregular1">
                <div className="explore2">Collect Now</div>
              </div>
            </div>
          </div>
          <div className="group-inner" />
          <img className="image-17-icon" alt="" src="/image-17@2x.png" />
        </div>
      </section>
      <nav className="navbar2">
        <div className="container15" />
        <div className="button27">
          <b className="medium2">Connect Wallet</b>
        </div>
        <div className="menu1">
          <div className="comunity4">
            <div className="community2">Community</div>
            <img
              className="arrow-chevron-down1"
              alt=""
              src="/arrow-chevron-down.svg"
            />
          </div>
          <div
            className="artist-collectors1"
            onClick={onArtistCollectorsClick}
          >{`Artist & Collectors`}</div>
          <div className="exhibition1" onClick={onExhibitionTextClick}>
            Exhibition
          </div>
          <div className="explore4" onClick={onExploreText3Click}>
            Explore
          </div>
          <div className="market1" onClick={onMarketTextClick}>
            Market
          </div>
          <b className="home2">Home</b>
        </div>
        <img className="logo-1-icon3" alt="" src="/logo-11@2x.png" />
      </nav>
    </div>
  );
};

export default Home;
