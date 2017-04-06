(function(){
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 4000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function appear1(){
    document.getElementById('appear').innerHTML="Digital India Program was launched in August 2014 to change the face of India digitally and electronically.  This would in turn pave way for a digitally empowered nation and economy.  As per this campaign, all offices and departments of Government of India would be digitally connected to each other and to the target population, thereby making the government mechanism smoother and malpractices-free.  This would also ensure effective governance in the country.  Digital India Program would reduce paperwork to a significant level.  The program which started in 2014 would complete by 2019.";
}
function appear2(){
    document.getElementById('appear').innerHTML="On his first speech of Independence Day in year 2014, Prime Minister Narendra Modi announced the famous Pradhan Mantri Jan Dhan Yojana, which ensures a bank account for every Indian.  In this mass drive, more than 15 million saving accounts were opened across the length and breadth of the country with almost all public sector banks participating in it.  It was the first ever financial inclusion program launched in the country and has seen success so far.  More than Rs 1,500 has been deposited in banks so far by the account holders.";
}
function appear3(){
    document.getElementById('appear').innerHTML="This type of campaign was not really new to India, however the name and intent may be new.  Previous governments have already worked on similar campaigns like Nirmal Bharat Program.  However, nothing has been achieved significantly so far and thus the Swachh Bharat Abhiyan comes with a new hope to clean the country’s mess.The campaign was launched in 2014 with almost every big and small personality of the country taking to the streets and taking part in it.  In fact, the cleanliness drive has more to do with self publicity, whether it is the Prime Minister himself, or other ministers, or film stars or the general public.All have taken pictures of cleaning their locality and posted it on their social media account to ensure that people see that they are involved with a noble cause.The evaluation of the campaign has to be seen in a longer run.";
}
function appear4(){
    document.getElementById('appear').innerHTML="This was more of a slogan than a campaign coined by the Prime Minister Narendra Modi to ensure self sufficiency in the field of mass production.  The vision has been to attract global investors to invest in domestic market and thus create India a manufacturing hub for the entire world.Make in India would also ensure that there are sufficient job opportunities for the national youth who are struggling to get a decent job in order to compete with their international counterparts.  The Make in India campaign is being run and administered by the Central Government and the government has identified a total of 25 different sectors on which it would focus.";
}
function appear5(){
    document.getElementById('appear').innerHTML="Inclusive governance is one of the core visions of Shri Narendra Modi.  As per Saansad Adarsh Gram Yojana, each MP would take out some part of their funds for the development of their constituencies.  Physical and institutional infrastructures are some of the way through which the villages of the country can reach up to their empowerment, as a whole.The Saansad Adarsh Gram Yojana ensures the same. The campaign which started in year 2014 is said to be successfully concluding by year 2019. The guidelines for rural development under the scheme have already been issued by the honorable prime minister in October 2014.";
}
function appear6(){
    document.getElementById('appear').innerHTML="Low cost benefits have been the core guiding principles of the Narendra Modi lead Central Government in almost all the schemes they are launching.  Atal Pension Yojana too is one such scheme, which ensures old age pension to those who are not covered under any other pension or social security scheme.This way, those people who have been working in unorganized sectors and enjoying no pension scheme would be covered and can ensure a healthy and comfortable old age.";
}
function appear7(){
    document.getElementById('appear').innerHTML="Pradhan Mantri Awas Yojana is primarily a welfare housing scheme launched by the central government under the leadership of Prime Minister Narendra Modi.  With PMAY, the intention is to provide housing to all by year 2022.  In order to make the scheme a success and reality, a total of around 2 crore houses would be constructed across the length and breadth of the country by year 2022.The houses would be distributed to the needy sections of society and a subsidy on loan would be provided by the central government, thereby making housing an affordable thing for the economically weaker people of the country.  Special preference would be given to senior citizens, women and SC/ST in allotment of these houses.";
}
function appear8(){
    document.getElementById('appear').innerHTML="The PMJJBY is a term life insurance policy that goes a long way in ensuring a safe financial future for the policy holder and comes with lowest cost on a yearly basis.Anyone who is within the age group of 18 years to 50 years can get enrolled for PMJJBY, provided they have a functional saving bank account.  Within the scheme, the policy holder would have to pay as a premium is Rs 330 per year and they would be covered with a life insurance of Rs 2 lakhs.";
}
function appear9(){
    document.getElementById('appear').innerHTML="Pradhan Mantri Suraksha Bima Yojana targets social security through insuring accidental deaths and partial or permanent disabilities.  A large number of population in India live in rural areas and these people do not have access to insurance schemes.  PMSBY is an initiative to cater to such a population so that they can enjoy the insurance benefits at minimum contributions.In order to get PMSBY scheme for anyone in India, the subscriber is required to just pay Rs 12 per year and enjoy a carefree insured life of up to Rs 2 lakhs insurance cover.  One of the best things about these social security schemes is that they require an insignificant level of paperwork and this leverage has been provided considering the fact that a large number of people living in rural areas do not have all the validation documents available with them.";
}
function appear10(){
    document.getElementById('appear').innerHTML="India is primarily an agricultural country and irrigation defines the success of agriculture.  This is why it is important for any agricultural economy to have a proper irrigation channel throughout the country.  Prime Minister Modi has identified this need and thus started this new scheme.As per the scheme details, just 45 per cent of the farm lands in India are accessible to the irrigation channels with remaining 55 per cent depending on traditional methods of irrigation.  This is a huge opportunity and the Pradhan Mantri Krishi Sinchai Yojana would ensure that adequate infrastructural arrangements are made so that maximum fields in the country are connected to the irrigation system properly.";
}
function appear11(){
    document.getElementById('appear').innerHTML="Pradhan Mantri Kaushal Vikas Yojana would facilitate necessary arrangements so that the younger lot of workforce in India is provided with world class training as far as technical expertise is concerned.  The skills training would be in line with latest technologies coupled with personality development and management skills that would ensure that our youth compete well with their international counterparts.";
}
function appear12(){
    document.getElementById('appear').innerHTML="This is yet another aggressive scheme launched by the Narendra Modi government.  MUDRA stands for Micro Units Development and Refinance Agency Ltd., which was initiated to bring into the general public into the normal banking system.  Facilities and benefits like credits, loans, and insurance are not reachable to many in India, especially to those living in rural and far flung areas.MUDRA bank is not exactly a bank but a banking regulator which would regulate the micro finance to the rural and needy population.";
}
function appear13(){
    document.getElementById('appear').innerHTML="Under this scheme, the government would run several micro campaigns to ensure that that the welfare needs of the poor population are met and taken care of.  It would conduct workshops to meet its agendas.";
}
function appear14(){
    document.getElementById('appear').innerHTML="Sukanya Samriddhi Yojana is one of the most promising and relevant schemes launched by the Narendra Modi Government.  SSY lays special emphasis on financial empowerment of the girl child.  Through this scheme, the parents of any girl child below 10 years can open a saving account for their daughters and operate it till they attain an age of 21 years.After that time, they can withdraw the money and use it for her marriage or higher education.  The scheme offers a high rate of return, even much higher than PPF and the depositor gets complete tax exemption for whatever amount invested under 80C of income tax.  Ever since the scheme has been launched, lakhs or parents have already got an account opened for their daughters and enjoying the benefits. Read more about this yojana.";
}
function appear15(){
    document.getElementById('appear').innerHTML="Just like you have a locker to secure your valuable belongings, Digilocker is a facility through which you can secure and keep your valuable documents secure.  Now, when everything has turned out to be digital, online documents are required in order to submit forms and other activities.Digilocker is a space provided by Government of India where you can upload all your important documents in digital format and use them whenever you have to furnish it anywhere to government authorities.  This drive has paved way for paperless environment and would also curtain the possibilities of corruption to the significant level.";
}
function appear16(){
    document.getElementById('appear').innerHTML="eBasta Scheme is very much similar to the concept of DigiLockers.  eBasta provides an online learning space for the students in the form of digital books.  With this service, students would no more have to go and buy their books from the book shops and neither would publishers need to worry about pirated versions or supply channel flaws.The content and curriculum of the students can be decided by the school and its teachers and students will have to just login and download their study material, which they can use for learning at their computers and tablets.  This kind of initiative would initiate the era of interactive learning in India.";
}
