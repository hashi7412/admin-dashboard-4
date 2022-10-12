import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll';
import Typewriter from "typewriter-effect";
import '../assets/scss/landing.scss'
import logo from '../assets/img/logo.png'
import arrow from '../assets/img/arrow.png'
import bluelogo from '../assets/img/logo-blue.png'
import list from '../assets/img/list.png'
import close from '../assets/img/close.png'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import border from '../assets/img/border.png'
import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'
import card4 from '../assets/img/card4.png'
import card5 from '../assets/img/card5.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import github from '../assets/img/github.png'
import you from '../assets/img/you.png'
import discord from '../assets/img/discord.png'
import video from '../assets/img/video.png'
const Landing = () => {
	
	const [time, setTime] = React.useState(+new Date())
	const [state, setStates] = React.useState({
		showMenu: false,
		contractAddress: '0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90',
		showCollapse1: true,
		showCollapse2: false,
		showCollapse3: false,
		showCollapse4: false,
		showCollapse5: false,
		mobile:	false,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		headerFixed: 0
	})
	const updateStatus = (params : {[key : string] : string | number | boolean | any}) => setStates({ ...state, ...params })

	const getRemainTime = () => {
		var countDownDate = new Date("2022-10-23 15:37:25").getTime();
  		var now = new Date().getTime();
  		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		updateStatus({days, hours, minutes, seconds})
	}

	React.useEffect(()=>{
		getRemainTime()
		const timer = setTimeout(()=>setTime(+new Date()), 1000)
		return () => clearTimeout(timer)
	}, [time])

	React.useEffect(() => {
		window.onscroll = function() {scrollChange()};
		window.onresize = function() {resize()}
		updateStatus({mobile: window.innerWidth <= 1024})
		window.ontouchend = function () {
			scrollChange()
		}
		getRemainTime()
	}, [])

	const resize = () => {
		console.log(window.innerWidth)
		updateStatus({mobile: window.innerWidth <= 1024})
	}

	function scrollChange() {
		if (window.pageYOffset > 60) {
			updateStatus({headerFixed: 2})
		} 
		// else if(window.pageYOffset > 50) {
		// 	updateStatus({headerFixed: 1})
		// }
		else {
			updateStatus({headerFixed: 0})
		}
	}

	return (
		<div className="landing">
			<div>
				<header className={`${state.headerFixed == 0 ? '' : (state.headerFixed == 2 ? 'fixed': 'hide')}`}>
					<div className="header-container container">
						<div className="header-row" style={{marginLeft: state.headerFixed == 2? '0': ''}}>
							<img src={logo}  className="logo" alt="logo" style={{transform:`${state.headerFixed != 0 ? 'scale(1.6)': ''}`}}/>
							<div className={`menubar ${state.showMenu ? 'show': ''}`}>
								<Link activeClass="menu" class="menu" to="section-1"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >Home</Link>
								<Link activeClass="menu" class="menu" to="section-2"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >Tokenomics</Link>
								<Link activeClass="menu" class="menu" to="section-3"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >Protocol</Link>
								<Link activeClass="menu" class="menu" to="section-4"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >How it works</Link>
								<Link activeClass="menu" class="menu" to="section-5"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >Ecosystem</Link>
								<Link activeClass="menu" class="menu" to="section-6"  style={{fontFamily:'Evoki', fontSize:'0.9em'}} >FAQs</Link>
								<Link to="/" className="menu app-btn" style={{fontFamily:'Evoki', fontSize:'0.9em'}}>Buy</Link>
								<a href="http://app.furio.io" className="menu app-btn" style={{fontFamily:'Evoki', fontSize:'0.9em'}}>DApp</a>
							</div>
							{
								window.innerWidth <= 1024 && !state.showMenu && <div className='list' onClick={() => {updateStatus({showMenu: true})}}><img src={list} alt="list" className="listbtn"/></div>
							}
							{
								window.innerWidth <= 1024 &&  state.showMenu && <div className='list' onClick={() => {updateStatus({showMenu: false})}}><img src={close} alt="list" className="listbtn" style={{width:'20px', height:'20px'}}/></div>
							}
						</div>
					</div>
				</header>
			</div>
			<div className="background">
					{[...Array(1000)].map((x, i) =>
						<div className="circle-container">
							<div className="circle"></div>
						</div>
					)}
			</div>
			
			<div className="content">
				<div className="section-1" id="section-1">
					<div className="container">
						<div className="section-1">
							<div className="row center p3">
								<div className="col-lg-6 col-md-12 row center middle">
									<div>
										
										<ScrollAnimation animateIn="slideInLeft" animateOut="fadeOutUp">
											<div className='h2' style={{ fontFamily:'Evoki'}}>
												<Typewriter
													onInit={(typewriter)=> {
													typewriter
													.typeString("Evoki Protocol")
													.pauseFor(5000)
													.deleteAll()
													.typeString("Welcomes You")
													.pauseFor(5000)
													.deleteAll()
													.start();
													}}
													options={{
														loop: true,
														delay:10
													}}
													/>
											</div>
										</ScrollAnimation>
										<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
											<p>The future of Dual Reward with Auto-Staking, Auto-Compounding & Reflection Reward sall together</p>
											<p>Rebasing paid at every 10 minutes and dividends paid on every buy and sell.</p>
											<p>A simple buy-hold-earn system that grows your holded token and reflection rewards i</p>
										</ScrollAnimation>
										<div className="flex mt5">
											<ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
												<Link to="/" className='default-button' style={{width:'150px'}}>BUY</Link>
											</ScrollAnimation>
											<ScrollAnimation animateIn="flipInX" animateOut="flipOutX"  delay={150}>
												<Link to="/" className='default-button' style={{width:'150px'}}>DAPP</Link>
											</ScrollAnimation>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 row center middle">
										<ScrollAnimation animateIn="bounceIn" animateOut="fadeOut" delay={200}>
											<div style={{position:'relative', textAlign:'center'}}>
												<img src={img1} alt="img1" className='img img1'/>
											</div>
										</ScrollAnimation>
								</div>
							</div>
							<div className="row center mt5 pt5">
								<ScrollAnimation animateIn="slideInUp" animateOut="fadeOut" >
									<h3 className='text-blue p3 text-center' style={{fontWeight:'bold'}}>Presale is Live Until!</h3>
								</ScrollAnimation>
							</div>
								<div className="row center mt3">
									<div>
										<p className='m0 text-center'>Days</p>
										<div className="timebar">
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" >
											<div className="timecard">{parseInt((state.days / 10).toString() )}</div>
										</ScrollAnimation>
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={250}>
											<div className="timecard">{state.days % 10}</div>
										</ScrollAnimation>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>&nbsp;</p>
									<div className="timebar">
										<div className="timecard" style={{backgroundColor:'transparent', color:'white', boxShadow:'none', width:'20px'}}>:</div>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>Hours</p>
									<div className="timebar">
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={140}>
											<div className="timecard">{parseInt((state.hours / 10).toString() )}</div>
										</ScrollAnimation>
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" >
											<div className="timecard">{state.hours % 10}</div>
										</ScrollAnimation>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>&nbsp;</p>
									<div className="timebar">
										<div className="timecard" style={{backgroundColor:'transparent', color:'white', boxShadow:'none', width:'20px'}}>:</div>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>Minutes</p>
									<div className="timebar">
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={140}>
											<div className="timecard">{parseInt((state.minutes / 10).toString() )}</div>
										</ScrollAnimation>
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" >
											<div className="timecard">{state.minutes % 10}</div>
										</ScrollAnimation>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>&nbsp;</p>
									<div className="timebar">
										<div className="timecard" style={{backgroundColor:'transparent', color:'white', boxShadow:'none', width:'20px'}}>:</div>
									</div>
								</div>
									<div>
										<p className='m0 text-center'>Seconds</p>
									<div className="timebar">
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={100}>
											<div className="timecard">{parseInt((state.seconds / 10).toString() )}</div>
										</ScrollAnimation>
										<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={200}>
											<div className="timecard">{state.seconds % 10}</div>
										</ScrollAnimation>
									</div>
								</div>
								<div>
									<p className='m0 text-center'>&nbsp;</p>
									<div className="timebar">
										<div className="timecard" style={{backgroundColor:'transparent', color:'white', boxShadow:'none', width:'20px'}}></div>
									</div>
								</div>
							</div>
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOut">
								<div className="row center mt5">
										<Link to="/" className='default-button'>Join presale</Link>
										<Link to="/" className='default-button'>Whitepaper</Link>
										<Link to="/" className='default-button'>Audit report</Link>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
				<div className="section-2" id="section-2">
					<div className="container">
						<div className="mt5 mb5">
							<div className="row center middle p3">
								<div className="col-lg-6 col-md-12">
									<ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut" >
										<h2 className='text-blue' style={{fontWeight:'bold'}}>Tokenomics</h2>
									</ScrollAnimation>
									<ScrollAnimation animateIn="slideInUp" animateOut="fadeOut" >
										<p>We believe that investors should be rewarded for holding their tokens in stead of simply waiting, and hoping, for the price to pump. </p>
										<p>We have implemented two types of rewards for our holders. </p>
										<p>3047.52 tokens are distributed to all holders every 10 minutes </p>
									</ScrollAnimation>
								</div>
								<div className="col-lg-6 col-md-12 row center middle">	
									<div className="background">
											{[...Array(1000)].map((x, i) =>
												<div className="circle-container">
													<div className="circle"></div>
												</div>
											)}
									</div>
									<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
										<img src={img2} alt="img1" className='img img1'/>
									</ScrollAnimation>
								</div>
							</div>
						</div>
						<div className="address-card mt5 mb5 p3">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOut">
								<h3 className='text-center'>Evoki contract address</h3>
							</ScrollAnimation>
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOut" delay={600}>
								<div className="input-bar p3 m2">
									<input type={"text"} style={{color:'var(--font-dark-color)'}} value={state.contractAddress} onChange={(v) => {updateStatus({contractAddress: v.target.value})}}/>
									<button className='btn'>CLICK TO BUY Evoki </button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
				<div className="section-3" id="section-3">
					<div className="container">
						<div className="row center middle p3">
							<div className="col-lg-6 col-md-12 row center middle">
								<ScrollAnimation animateIn="bounceIn" animateOut="fadeOut">
									<img src={bluelogo} alt="bluelogo" style={{width:'80%', height:'80%', marginLeft:'10%'}}/>
								</ScrollAnimation>
				
							</div>
							<div className="col-lg-6 col-md-12 p3">
								<ScrollAnimation animateIn="slideInUp" animateOut="fadeOut">
									<h2>About Evoki Protocol</h2>
									<p>Evoki Protocol is a DeFi token built on the efficient Binance Smart Chain. </p>
									<p>Our vision for the ecosystem is to deliver multiple projects that provides actual use-caseutility.</p>
									<p>Evoki Protocol is a variable, continuous compounding, interest rebase tokenwithafullyautomated dividend distribution mechanism. 
									</p>							
									<p>Evoki Protocol provide rebase rewards for 5 years.</p>
									<p> 3047.52 tokens are distributed to all holders every 10 minutes and 3%of buyandsell tax is distributed to all holders. </p>
									<p>To ensure a stability of price, every sell transaction will burn 20%of the sell tokenamount from total supply directly to the Black Hole (dEAd address). </p>
									<p>this ensures the Evoki tokens in the liquidity pool does not exponentially rebasewithanoverload amount which would cause the price to crash over time.</p>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="section-4" id="section-3">
					<div className="container">
						<div className="row center p3">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
								<div className="border-img">
									<img className='logo2' src={logo} alt="logo" style={{zIndex:100}}/>
									<img className='line' src={border} alt="border"/>
								</div>
							</ScrollAnimation>
						</div>
						<ScrollAnimation animateIn="flipInX" animateOut="fadeOut">
							<h2 className='text-center p0 m0'>How it works?</h2>
							<div className="row center ml-auto mr-auto">
								<p className='text-center p3' >Evoki is the native token which interest rebase rewards are paid. Every token holder automatically receives 282% interest and reflection rewardsforayear, just for holding $Evoki tokens in their own wallet!
								The more you hold, the more you receive!</p>
							</div>
						</ScrollAnimation>
						<div className="row center middle mt5">
							<div className="col-lg-6 col-md-12 ">
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
									<div className="card">
										<div className="img-panel">
											<img src={card1} alt="card1" />
											<div className="circle1"></div>
											<div className="circle2"></div>
											<div className="circle3"></div>
										</div>
										<div>
											<h5 className='text-blue m0'>Auto-Compounding</h5>
											<p className='m0 mt1'>Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 282%. Interest rewards are compounded every 10 minutes automatically to every BSCwallet that is holding any Evoki tokens.</p>
										</div>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
									<div className="card">
										<div className="img-panel">
											<img src={card2} alt="card1" />
											<div className="circle1"></div>
											<div className="circle2"></div>
											<div className="circle3"></div>
										</div>
										<div>
											<h5 className='text-blue m0'>Evoki Protocol Dividend Fund(EPDF)</h5>
											<p className='m0 mt1'>The EPDF serves as a Evoki dividends to achieve profitability, stability andlongtermsustainability of the Evoki Protocol, and not by just maintaining a consistent 282% rebase rate, but by paying Evoki dividends to all token holders. Evoki Protocol Growth Funds Vault.</p>
										</div>
									</div>
								</ScrollAnimation>
								
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
									<div className="card">
										<div className="img-panel">
											<img src={card3} alt="card1" />
											<div className="circle1"></div>
											<div className="circle2"></div>
											<div className="circle3"></div>
										</div>
										<div>
											<h5 className='text-blue m0'>Growth Funds</h5>
											<p className='m0 mt1'>The Growth Funds provides support to the EPDF in the event of an extreme price drop for the Evoki token. 
											The Growth Funds will also be utilized for Buy Back to support the value of Evoki token and used to develop Ecosystem projects.</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-6 col-md-12">
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
									<div className="card" >
										<div className="img-panel">
											<img src={card4} alt="card1" />
											<div className="circle1"></div>
											<div className="circle2"></div>
											<div className="circle3"></div>
										</div>
										<div>
											<h5 className='text-blue m0'>Auto Black Hole</h5>
											<p className='m0 mt1'>20% of sold amount are burned using the Black Hole (dEAd address). The more that is sold, the more that is put into the black hole. Causing the blackhole to inflate and magnify in size thus reducing the circulatingsupplyand keeping the Luzion Protocol value stable.</p>
										</div>
									</div>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
									<div className="card">
										<div className="img-panel">
											<img src={card5} alt="card1" />
											<div className="circle1"></div>
											<div className="circle2"></div>
											<div className="circle3"></div>
										</div>
										<div>
											<h5 className='text-blue m0'>Evoki Auto-Liquidity Engine (EALE)</h5>
											<p className='m0 mt1'>Liquidity allows for anybody to buy & sell their Evoki/BNB at anytime, however the less money/liquidity there is in the pool, the worse price you get.</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="section-5" id="section-5">
					<div className="container">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
							<h2 className='text-center'>Evoki Ecosystem</h2>
							<p className='text-center'>Evoki is more than just a rebasing and compounding protocol.</p>
							<p className='text-center'>It is an ecosystem of blockchain-inspired ventures adding utility to the Evoki token.</p>
						</ScrollAnimation>
						<div className="row center" >
							<div className="col-lg-4 cold-md-12" style={{paddingTop:'5em'}}>
								<ScrollAnimation animateIn="flipInY" animateOut="fadeOut">
									<div className="card p3">
										<img src={logo} alt="logo" />
										<h3>Evoki Token</h3>
										<p>The Evoki Protocol is the heartbeat of our entire ecosystem, providing morethanjusta DeFi protocol token</p>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 cold-md-12" style={{paddingTop:'5em'}}>
								<ScrollAnimation animateIn="flipInY" animateOut="fadeOut" delay={300}>
									<div className="card p3">
										<img src={logo} alt="logo" />
										<h3>EVKChain</h3>
										<h4>Coming Soon</h4>
										<h4>2023</h4>
									</div>
								</ScrollAnimation>
							</div>
							<div className="col-lg-4 cold-md-12" style={{paddingTop:'5em'}}>
								<ScrollAnimation animateIn="flipInY" animateOut="fadeOut" delay={700}>
									<div className="card p3">
										<img src={logo} alt="logo" />
										<h3>EVK Verse</h3>
										<h4 className='p0'>Coming Soon</h4>
										<h4 className='p0'>2024</h4>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				<div className="section-6" id="section-6">
					<div className="container">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
						<h2 className='text-center'>FAQ</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
							<div className="collapse p3">
								<div className="justify pointer" onClick={() => {updateStatus({showCollapse1: !state.showCollapse1})}}>
									<div className="title">How do I buy Evoki tokens?</div>
									<div className="close">
										<img src={arrow} alt="arrow" style={{transform:`${state.showCollapse1? '': 'rotateX(180deg)'}`}}/>
									</div>
								</div>
								{
									state.showCollapse1 && <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
								}
							</div>
							<div className="collapse p3">
								<div className="justify pointer" onClick={() => {updateStatus({showCollapse2: !state.showCollapse2})}}>
									<div className="title">Is there transfer fee?</div>
									<div className="close">
										<img src={arrow} alt="arrow" style={{transform:`${state.showCollapse2? '': 'rotateX(180deg)'}`}}/>
									</div>
								</div>
								{
									state.showCollapse2 && <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
								}
							</div>
							<div className="collapse p3">
								<div className="justify pointer" onClick={() => {updateStatus({showCollapse3: !state.showCollapse3})}}>
									<div className="title">Is Evoki just fork another token?</div>
									<div className="close">
										<img src={arrow} alt="arrow" style={{transform:`${state.showCollapse3? '': 'rotateX(180deg)'}`}}/>
									</div>
								</div>
								{
									state.showCollapse3 && <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
								}
							</div>
							<div className="collapse p3">
								<div className="justify pointer" onClick={() => {updateStatus({showCollapse4: !state.showCollapse4})}}>
									<div className="title">What is the Growth funds wallet address?</div>
									<div className="close">
										<img src={arrow} alt="arrow" style={{transform:`${state.showCollapse4? '': 'rotateX(180deg)'}`}}/>
									</div>
								</div>
								{
									state.showCollapse4 && <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
								}
							</div>
							
							<div className="collapse p3">
								<div className="justify pointer" onClick={() => {updateStatus({showCollapse5: !state.showCollapse5})}}>
									<div className="title">How do I import Evoki in metamask wallet?</div>
									<div className="close">
										<img src={arrow} alt="arrow" style={{transform:`${state.showCollapse5? '': 'rotateX(180deg)'}`}}/>
									</div>
								</div>
								{
									state.showCollapse5 && <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </div>
								}
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<footer>
				<div className="container">
					<div className="row p3">
						<div className="col-lg-3 col-md-6 col-sm-12 p3">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
								<h4>Evoki Protocol</h4>
								<Link to="/" className='footer-menu'>AUTO-STAKING AND COMPOUNDING</Link>
								<Link to="/" className='footer-menu'>Evoki INSURANCE FUND (SIF)</Link>
								<Link to="/" className='footer-menu'>Evoki TREASURY</Link>
								<Link to="/" className='footer-menu'>Evoki AUTO-LIQUIDITY ENGINE  (SALE)</Link>
								<Link to="/" className='footer-menu'>Evoki FIRE PIT</Link>
								<Link to="/" className='footer-menu'>TOKENOMICS</Link>
								<Link to="/" className='footer-menu'>WHITEPAPER</Link>
								<Link to="/" className='footer-menu'>ROADMAP</Link>
								<Link to="/" className='footer-menu'>NEWS & MEDIA</Link>
								<Link to="/" className='footer-menu'>BLOG</Link>
								<Link to="/" className='footer-menu'>REVIEWS</Link>
								<Link to="/" className='footer-menu'>FAQS</Link>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 p3">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={300}>
								<h4>Evoki Protocol</h4>
								<Link to="/" className='footer-menu'>Evoki OVERVIEW</Link>
								<Link to="/" className='footer-menu'>BUY AND SELL FEES EXPLAINED</Link>
								<Link to="/" className='footer-menu'>TRADING FEES EXPLAINED</Link>
								<Link to="/" className='footer-menu'>FIXED APY EXPLAINED</Link>
								<Link to="/" className='footer-menu'>HOW TO CALCULATE APY</Link>
								<Link to="/" className='footer-menu'>LONG TERM INTEREST CYCLE</Link>
								<Link to="/" className='footer-menu'>THE BEAUTY OF MATHS</Link>
								<Link to="/" className='footer-menu'>COMPETETIVE ADVANTAGES</Link>
								<Link to="/" className='footer-menu'>PRE-LAUNCH ARCHIVED INFO</Link>
								<Link to="/" className='footer-menu'>CONTRACT AUDIT</Link>
								<Link to="/" className='footer-menu'>LIQUIDITY LOCK</Link>
								<Link to="/" className='footer-menu'>$Evoki CHART</Link>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 p3">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={600}>
								<h4>Evoki Protocol</h4>
								<Link to="/" className='footer-menu'>Evoki Protocol</Link>
								<Link to="/" className='footer-menu'>Evoki RACING</Link>
								<Link to="/" className='footer-menu'>Evoki BLOCKCHAIN</Link>
								<Link to="/" className='footer-menu'>Evoki LIFESTYLE (COMING SOON)</Link>
								<Link to="/" className='footer-menu'>Evoki TRAVEL (COMING SOON) </Link>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 p3">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={800}>
								<h4>Evoki Protocol</h4>
								<Link to="/" className='footer-menu'>DISCORD</Link>
								<Link to="/" className='footer-menu'>TWITTER</Link>
								<Link to="/" className='footer-menu'>YOUTUBE (BRYAN LEGEND)</Link>
								<Link to="/" className='footer-menu'>YOUTUBE (Evoki PROTOCOL)</Link>
								<Link to="/" className='footer-menu'>MEDIUM</Link>
								<Link to="/" className='footer-menu'>GITHUB</Link>
								<Link to="/" className='footer-menu'>REDDIT</Link>
								<Link to="/" className='footer-menu'>INSTAGRAM</Link>
								<Link to="/" className='footer-menu'>TIKTOK</Link>
							</ScrollAnimation>
						</div>
					</div>
				</div>
				<Link className="logo" to={"/"}>
					<ScrollAnimation animateIn="bounceIn" animateOut="fadeOut">
							<img src={logo} alt="logo" />
					</ScrollAnimation>
				</Link>
				<div className="footer-bar ">
					<div className="footer-container container">
						<div className="footer-row">
							<img src={logo}  className="footer-logo" alt="logo" />
							<div className={`menubar`}>
								<Link to="/" className="menu" >
									<img src={facebook} alt="facebook" />
								</Link>
								<Link to="/" className="menu">
									<img src={you} alt="you" />
								</Link>
								<Link to="/" className="menu">
									<img src={twitter} alt="twitter" />
								</Link>
								<Link to="/" className="menu">
									<img src={video} alt="video" />
								</Link>
								<Link to="/" className="menu">
									<img src={discord} alt="discord" />
								</Link>
								<Link to="/" className="menu">
									<img src={github} alt="github" />
								</Link>
							</div>
							<Link className="discord-btn" to="/discord">
								Join Discord
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Landing
