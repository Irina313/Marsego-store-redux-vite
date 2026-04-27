import about from './about.jpg';

function About() {
return (<div>
    <p className="about"><strong>MARSEGO</strong> is a Ukrainian brand of elegant clothing dedicated to modern femininity.<br></br>
It was founded in 2014.<br></br>
Every year, the brand releases three large collections: Spring-Summer, Fall-Winter, and New Year's capsule, with a constantly updated range.<br></br>
The MARSEGO collections feature stylish and basic models of women's clothing for everyday wear, which are also appropriate for cocktail parties and important events. Wide range and color palette.<br></br>
Each collection of the brand helps customers create their ideal basic wardrobe. Any models from different collections can be easily combined with each other thanks to basic calm colors and modern feminine silhouettes.
</p>

<img src={about} className="pic" width="600px" alt="pic"/>
</div>)
}

export default About;