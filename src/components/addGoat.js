import React, { Component } from 'react';

class Goat extends Component {

    state = {
        usedFirstNames: [],
      };

    shouldComponentUpdate(nextProps){
        return false;
    }

    render(){

        const arFirstNames = [
            'Napoleon','Albert','Phil','George','Graham','Bertie','Dexter','Frankie','Tommy','Kyle','Jacko','Freddy','Jezza','Craig','Porkie',
            'Stinky','Pete','Jeff','Taz','Taffy','Toffee','Buddy','Harrison','Spud','Phillipo','Godfrey','Mikey','Bobby','Micah','Frodo',
            'Simon','Dylan','Shaun','Sean','Joey','Gruff','Tee','Jamie','Peanut','Paul','Goldey','Lucius','Lucifer','Donny','Clark','Kent',
            'Leonard','Blue','Alex','Steffan','Romeo','Kiwi','Bandit','Teddy','Jasper','Finn','Diesel','Simba','Murphy','Bruno','Barney','Dixen'
            ];

        const arLastNames = [
            'Jones','Da Goat','Chubb','the Third','Phillips','Lewis','Piggo','Franklin','Red','Big Balls','Cookie','Big Boy',
            'The Porker','Parker','Kent','Gruff','Mountain','Pinky','Smith','Gizmo','Good Boy','Crumpet','Walliams','Gretzka',
            'James','Son of Satan','The Stud','McGregor','Shadow','Pepper','Rye','Kelly','Porker','Obama','Rodriguez','Bale',
            'Haye','The Bakers Son','Crasher','Smasher','Flash','Slug','Graham','Cates','Boy','Simo','Leonardo','Ginger','Ginger','Gregg','Oreo'
        ];

        const arStoryStart = [
            'Born in hell, this goat is not to be reckoned with.','One of 16 siblings, this goat craves attention.',
            'This French animal loves baguettes... and anything else edible actually.',
            'Believe it or not, this young goat spawned in the land of Sweden.',
            'Some say they have seen this goat kill, just saying.',
            'As spanish as paella this goat does not understand English, or Spanish actually.',
            'This goat claims to have come up with the idea for Uber.','This full time smoking goat has time for nobody.',
            'Full time goat, part time comedian at the Comedy club on the farm.',
            'This English goat loves sausage and mash.',
            'Although convinced he is a sheep, this stud is infact a goat.',
            'Ever since this goat was a young boy he dreamed the stardom of Billy Goats Gruff.',
            'Five time international head butt champion.',
            'The origin of this goat is unknown, sadly he does not speak much English.',
            'Sponsored by Subway, it is rumouored around the local farm that this goat is faster than Bolt!',
            'This Scottish goat lived with his family of 5, before trading them in for a ham sandwich.',
            'Born into the royal family, this goat believes he will one day be the King of England.',
            'Shipped to Canada from South America at birth, he truly belives that he is Canadian.',
            'This headbutter, is 2nd cousins with Billy Goats Gruff.',
            'Although this goat was born in Japan, he identifies as an American.',
            'Born into the local goat orphanage, he has never known of his true parents.',
            'Welsh through and through, claims to be related to dragons.',
            'We do not actually know where this spawn came from, mysterious.',
            'This goat was born with great eyesight, until he found a love for RGB lighting.',
            'Most people associate Australian animals as fierce and dangerous, not this one.',
            'This goat was born in China but according to our sources he does not speak Chinese (or any other language).',
            'Founder of the saying G.O.A.T (greatest of all time) this goat has had swag since birth.',
            'Born just outside of Silicon Valley, this goat has the nickname of Pied Piper',
            'Born in flames, those closest to him claim that he has never blinked.',
            'A lover of jacket potatos, this animal originates from Bulgaria.',
            'This goat is originally from Scotland, before he wandered down to England.',
            'Born with heart complications, he was adopted and imported from Japan at a very young age',
            'Found in an abandoned farm house, he has always had a strange look in his eyes.',
            'Born with 3 brothers and 5 sisters, he was neglected until he found his way to this lovely farm.',
            'He was born in Canada and sure is used to the winter chills!',
            'Adopted in Northern Ireland, he has no memory of his family what so ever',
        ];

        const arStoryMid = [
            'Once tipped off as the next big thing in Winter Sports.',
            'The country people believe that this goat can backflip on command.',
            'Serial eater of buttered baguettes.',
            'According to his LinkedIn, he has been unemployed his entire life.',
            'Has several hundred friends on GoatBook (kind of a big deal).',
            'We are legally obligated to tell you that this goat has served time.',
            'Will fight anyone and I mean anyone, for a fresh patch of grass.',
            'Once upon a time this fella headbutt something so hard, he thought he was a duck for a few days.',
            'Owner of an Apple Mac, Apple iPhone and will fight you if you bad mouth Apple.',
            'No amount of love and attention will bring this goat back from the darkside.',
            'Banned from public view as children have reported him stealing their ball.',
            'Lover of all things grassy, pretty boring guy to be honest.',
            'Future "Hall of Farmer" due to his notorious presence.',
            'This geezer does not really do anything, just a typical goat.',
            'He has been under surveillance since 2013, due to an internation cyber attack.',
            'He has painted several pieces that have sold for millions, I doubt that he understands but his owners appreciate it.',
            'After running for President in the goat world for the 11th time, he has been announced as local Mayor out of sympathy.',
            'Full-time blogger, this fella just can not let the Tumblr days go.',
            'Ever since we have known this goat, it is obvious he wants to one day be a sponsored Skateboarder.',
            'Despite his good looks and popularity in the goat community, he strongly believes that he is infact an Alpaca.',
            'He is not happy about us using this picture to represent him, he has told us his "Gains" are far better now.',
            'Although he was not technically charged for anything in court back in 2015, he is banned from standing within 125ft of a School or any public service building.',
            'Party go-er since birth, this goat can often be heard humming the sweet rave tunes of the 90s.',
            'Although it is frowned upon for Goats to eat pastries, this goat has a sweet tooth for Greggs Sausage Rolls.',
            'Vegan for many years now, this goat really does like grass.',
            'He was training to be the first Goat Scuba Diver, but due to complications with equipment sizing he was unfortunately let go out of the program.',
            'After auditioning for lead role in Mr.Robot all but 15 times, this passionate actor was given a sympathy role in a Bulgarian animal show.',
            'Self-proclaimed hype beast, this goat took to selling second hand Jordans after he realised that they would not fit him.',
            'Remember the goat screaming videos, well this goat started those.',
            'Currently enrolled as an apprentice hairdresser, this goat sorts the locals out with his special "Trimz".',
            'He can be heared roaring "Oh, Jeremy Corbyn" around the farm on a daily basis.',
            'With over 100 followers on Instagoat, this diva has "Influencer" on his CV.',
            'It is said that this spooky loving goat hibernated all year round, until Halloween',
            'Born in Asia, he move from town to town, believed to be able to speak 7 goat languages to this very day.',
            'His previous owners were not the kindest, they never used to share any of their cake... how rude!'
        ];

        const arStoryEnd = [
            'This boy has had several medicals and all doctors believe that he will live forever.',
            'Has been warned on numerous occasions that he must stop eating double cheese pizzas before his heart gives out.',
            'Since taking this photo, he has dyed his hair green. Do not ask us why.',
            'Has publically announced that he will devote the rest of his life to eating grass.',
            'Sadly he is no longer with us. No literally, he moved to America somewhere.',
            'He paid thousands of pounds for this photo shoot, we have no idea where he got the money from.',
            'Has been told he must pay child support but continues to ignore our calls.',
            'One of our personal favourites, I mean just look at him.',
            'If you see this goat in an area near you please call us as his mother is worried sick.',
            'Has just asked us what a scrote is, this is awkward.',
            'Sadly, he is currently in intensive care as his most recent stunt did not go according to plan.',
            'At his present time, he and his spouse have just delivered their 37th baby.',
            'Unfortunately, this guy did not know he was allergic to avocado until it was too late (one hipster down).',
            'Has gone on to be the face of the Goats after donating all his grass to charity.',
            'Sadly this guy is back in rehab after getting hooked on eating manure again.',
            'With a shift of attitute, this goat has now become a full-time React.js developer!',
            'Now fighting for a living, he competes in the WWE spin off Goat.Wrestling.Entertainment.',
            'Nobody has seen him for a while, although he does tend to get drunk and turn up a few weeks later.',
            'Since 2017, 53 goats have wound up dead and he is believed to be the reason.',
            'All I know is I would not want to fight this guy, look at him.',
            'We have heard that he is now on the run after racking up "hella bills" in the strip club.',
            'We doubt that you would recognise him these days, rocking a septum piercing and a studded belt.',
            'Sadly he passed away in a car crash this year, we are trying to seem sad but we are more impressed that he stole and car and was able to drive it',
            'Despite his poor flexibility and four legs, he now dedicates all of his effort in to Goat-Jitsu'
        ];

        var rand = Math.floor((Math.random() * 100) + 1);
        var newFirstName = this.state.usedFirstNames.slice();
        let firstName = [];

        do{
            firstName = arFirstNames[Math.floor(Math.random()*arFirstNames.length)];
            this.setState({ usedFirstNames: [...this.state.usedFirstNames, firstName] })
        } while(this.state.usedFirstNames.includes(newFirstName));
        
        const lastName = arLastNames[Math.floor(Math.random()*arLastNames.length)];
        const randomStory = arStoryStart[Math.floor(Math.random()*arStoryStart.length)] + ' ' + arStoryMid[Math.floor(Math.random()*arStoryMid.length)] + ' ' + arStoryEnd[Math.floor(Math.random()*arStoryEnd.length)];

        const randomName = firstName + ' ' + lastName;

        return(
            
            <div 
            className="GoatItem"
            id="Goats"
            onScroll={this.handleScroll}
            name={() => this.props.newName("randomName")}
            >
                <img className="GoatImg" src={ "/images/goats/" + rand + ".jpg" } alt="goat"/>
                <div className="GoatContent">
                    <p>{randomName}</p>
                    <div className="GoatStory">
                        <p>{randomStory}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goat;
