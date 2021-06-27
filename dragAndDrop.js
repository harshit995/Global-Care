function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(document.getElementById(data).getAttribute("id"));
    if (document.getElementById(data).getAttribute("id") == "drag1") {
        document.querySelector(".verdict").innerHTML = "Regular exercise helps you relax, increases your energy levels, improves your bone intensity, improves endurance, and helps improve your immune system. This can be beneficial to your lungs and overall health because it helps you live a better life.Proper diet can help in the treatment of symptoms of respiratory diseases too. You need to choose healthy foods that help heal your body. This helps your body become better equipped to fight infections and maintain a healthy body weight. . You should eat three servings of whole-grain foods. You should increase the intake of vegetables and fruits as this can help improve your overall health. You should take care of how much you eat. Instead of taking seconds, you can replace that with a serving of fruit.";
    }
    else if (document.getElementById(data).getAttribute("id") == "drag2") {
        document.querySelector(".verdict").innerHTML = "The body needs water to digest and absorb nutrients from foods and beverages efficiently. Being dehydrated makes digestion more difficult and less effective, which increases the likelihood of an upset stomach.When the body is horizontal, the acid in the stomach is more likely to travel backward and move upward, which can cause heartburn.Heat may relax tense muscles and ease indigestion, so taking a warm bath may help to ease the symptoms of an upset stomach. It could also be beneficial to apply a heated bag or pad to the stomach for 20 minutes or until it goes cool. Some studies suggest that mixing lime or lemon juice in water with a pinch of baking soda can help to relieve a variety of digestive complaints.Basil contains substances that may reduce gas, increase appetite, relieve cramping, and improve overall digestion. Basil also contains eugenol, which may help to reduce the quantity of acid in the stomach.";

    }
    else if (document.getElementById(data).getAttribute("id") == "drag3") {
        document.querySelector(".verdict").innerHTML = "When you apply ice on the affected body part, it slows down the nerve impulses in that area thus relieving pain. Cold compression is effective in reducing inflammation and pain in the joints, even among arthritis patients.We have all dipped our feet in warm salt water after a vigorous workout or long trek at some point in our lives. Turns out, there’s solid science behind it: dipping the feet in salty water reduces oedema by osmosis and the warmth from the water loosen the knots in tired muscles addresses the muscle soreness. Massaging your body with warm mustard oil can help relieve pain. Research shows that mustard oil contains a compound called allyl isothiocyanate which reduces inflammation in the body.Scientists have compared the action of ginger to ibuprofen (a potent painkiller). Ginger helps in reducing pain and inflammation in the body.";

    }
    else if (document.getElementById(data).getAttribute("id") == "drag4") {
        document.querySelector(".verdict").innerHTML = "In another study, 28 women self-monitored their hydration status using a probe to measure their urine concentration. They found that an increase in fluid intake led to a decrease in UTI frequency.To stay hydrated and meet your fluid needs, it’s best to drink water throughout the day and always when you’re thirsty.Fruits and vegetables are especially high in vitamin C and are a good way to increase your intake.Red peppers, oranges, grapefruit and kiwifruit all contain the full recommended amount of vitamin C in just one serving.Additionally, those who are prone to UTIs should avoid using spermicide, since it has been linked to an increase in UTIs Finally, when you use the toilet, make sure you wipe front to back. Wiping from back to front can cause bacteria to spread to the urinary tract and is associated with an increased risk of UTIs.";
    }
}