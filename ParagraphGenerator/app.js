const text = [
    `She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.`,

    `The light blinded him. It was dark and he thought he was the only one in the area, but the light shining in his eyes proved him wrong. It came from about 100 feet away and was shining so directly into his eyes he couldn't make out anything about the person holding the light. There was only one thing to do in this situation. He reached into his pocket and pulled out a flashlight of his own that was much stronger than the one currently blinding him. He turned it on and pointed it into the stranger's eyes.`,
    
    `There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.`,
    
    `A long black shadow slid across the pavement near their feet and the five Venusians, very much startled, looked overhead. They were barely in time to see the huge gray form of the carnivore before it vanished behind a sign atop a nearby building which bore the mystifying information "Pepsi-Cola."`,
    
    `Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?`,
    
    `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.` ,

    `Lori lived her life through the lens of a camera. She never realized this until this very moment as she scrolled through thousands of images on your computer. She could remember the exact moment each photo was taken. She could remember where she had been, what she was thinking as she tried to get the shot, the smells of the surrounding area, and even the emotions that she felt taking the photo, yet she had trouble remembering what she had for breakfast.`,

    `According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”`,

    `It was a simple green chair. There was nothing extraordinary about it or so it seemed. It was the type of chair one would pass without even noticing it was there, let alone what the actual color of it was. It was due to this common and unassuming appearance that few people actually stopped to sit in it and discover its magical powers.`,

    `The young man wanted a role model. He looked long and hard in his youth, but that role model never materialized. His only choice was to embrace all the people in his life he didn't want to be like.`,

    `Puppies are soft, cute, funny, and make a big mess. Every month or two our family fosters 6-12 week old puppies for a puppy rescue nonprofit organization. We all enjoy cuddling their furry bodies after a clean bath. Fresh puppy smell is great. The puppies play with each other and our adult dog. They look so funny when they lay on top of each other and sleep. While puppies can be great fun, they also can make big messes. 4-6 puppies can make a lot of puppy pee and poop. It's a challenge to keep the puppies and the puppy pen clean.`,

    `There were two things that were important to Tracey. The first was her dog. Anyone that had ever met Tracey knew how much she loved her dog. Most would say that she treated it as her child. The dog went everywhere with her and it had been her best friend for the past five years. The second thing that was important to Tracey, however, would be a lot more surprising to most people.`,

    `Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.`,

    `It had been a simple realization that had changed Debra's life perspective. It was really so simple that she was embarrassed that she had lived the previous five years with the way she measured her worth. Now that she saw what she had been doing, she could see how sad it was. That made her all the more relieved she had made the change. The number of hearts her Instagram posts received wasn't any longer the indication of her own self-worth.`,

    `The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank.`,

    `Brock would have never dared to do it on his own he thought to himself. That is why Kenneth and he had become such good friends. Kenneth forced Brock out of his comfort zone and made him try new things he'd never imagine doing otherwise. Up to this point, this had been a good thing. It had expanded Brock's experiences and given him a new appreciation for life. Now that both of them were in the back of a police car, all Brock could think was that he would have never dared do it except for the influence of Kenneth.`,

    `The bush began to shake. Brad couldn't see what was causing it to shake, but he didn't care. he had a pretty good idea about what was going on and what was happening. He was so confident that he approached the bush carefree and with a smile on his face. That all changed the instant he realized what was actually behind the bush.`,

    `All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.`,

    `The alarm went off and Jake rose awake. Rising early had become a daily ritual, one that he could not fully explain. From the outside, it was a wonder that he was able to get up so early each morning for someone who had absolutely no plans to be productive during the entire day.`,

    `He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.`,
];

// function to shuffle array 
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}


const item = document.querySelector("#item")
const dataContainer = document.querySelector("#data")

const generate = () => {
     
    if(isNaN(item.value) || item.value<=0 || item.value > 20) {
        alert("Please enter a number from 1 to 20");
        // const randomIndex = Math.floor(Math.random() * text.length)
        // dataContainer.innerHTML = `<p>${text[randomIndex]}</p>`
    }
    else{
        const randomText = shuffle(text); //passing the array through shuffle function and storing in a new array

        const data = randomText.slice(0, item.value)  //it slices the array from 0 to 1 less than the entered value
        // console.log(data);
        const paras = data.map(
            (d) => {
                return `<p>${d}</p> <br>`
            }
            )
        dataContainer.innerHTML = paras.join("");
    }


}