import type { Subject } from "@/types/notes";

export const ECONOMICS: Subject = {
  slug: "economics",
  examBoard: "OCR",
  qualification: "GCSE (9-1) J205",
  title: "Economics",
  tagline: "Clear, exam-focused notes for OCR GCSE Economics",
  description:
    "Notes built directly around the four OCR GCSE Economics topics: Introduction to Economics, The Role of Markets and Money, Economic Objectives and the Role of Government, and International Trade and the Global Economy. Every subtopic includes a diagram where one is examinable, and a model exam-style answer.",
  topics: [
    {
      slug: "introduction-to-economics",
      code: "Topic 1",
      title: "Introduction to Economics",
      description:
        "The starting point for the whole course: what resources exist, why scarcity forces choices, who the key economic decision-makers are, and how a PPF shows trade-offs.",
      subtopics: [
        {
          slug: "factors-of-production",
          code: "1.1",
          title: "The Factors of Production",
          summary:
            "The four resources every economy combines to produce goods and services, and the reward each one earns.",
          sections: [
            {
              heading: "The four factors",
              body: [
                "Every good or service is produced by combining four types of economic resource, known as the factors of production: land, labour, capital, and enterprise.",
                "Land covers all natural resources used in production — not just physical ground, but also water, minerals, forests and the raw materials taken from them. Its reward is rent.",
                "Labour is the human effort, both physical and mental, that people contribute to production. Its reward is wages (or salaries).",
                "Capital is anything manufactured that is then used to produce other goods and services, rather than being consumed directly — machinery, factories, tools and infrastructure. Its reward is interest.",
                "Enterprise is the willingness of entrepreneurs to take the risk of combining the other three factors to produce a good or service, in the hope of making a profit. Its reward is profit — but unlike wages, rent and interest, profit is not guaranteed.",
              ],
            },
            {
              heading: "A worked example",
              body: [
                "Take a small independent coffee shop. The unit it rents on the high street, and the coffee beans grown on a farm abroad, are land. The baristas making the drinks are labour. The espresso machine, the fridge, and the till system are capital. The owner risking their savings to open the shop, hoping customers will come, is enterprise.",
                "If the shop succeeds, the landlord earns rent, the baristas earn wages, any bank loan used to buy the machine earns the bank interest, and the owner keeps whatever is left over as profit. If the shop fails, the owner can still owe rent, wages and interest — profit is the only reward that can turn negative.",
              ],
            },
            {
              heading: "Why the distinction matters",
              body: [
                "Exam answers that name the correct factor of production and its correct reward score more marks than vague answers about 'resources'. Always link the factor to its specific reward: land–rent, labour–wages, capital–interest, enterprise–profit.",
                "A common mistake is confusing capital (machinery, factories) with financial capital (money used to start a business). In OCR Economics, 'capital' as a factor of production always means physical/manufactured resources, not cash.",
              ],
            },
          ],
          diagram: {
            kind: "pie",
            title: "Example: how a small firm's revenue is shared between the factors of production",
            slices: [
              { label: "Rent (land)", value: 15 },
              { label: "Wages (labour)", value: 40 },
              { label: "Interest (capital)", value: 10 },
              { label: "Profit (enterprise)", value: 20 },
              { label: "Raw materials", value: 15 },
            ],
            note: "Illustrative example only, not real financial data — the point to remember is that rent, wages, interest and profit are the four rewards, each linked to a specific factor.",
          },
          keyTerms: [
            { term: "Land", definition: "Natural resources used in production; reward is rent." },
            { term: "Labour", definition: "Human physical and mental effort used in production; reward is wages." },
            { term: "Capital", definition: "Manufactured resources used to produce other goods, e.g. machinery; reward is interest." },
            { term: "Enterprise", definition: "The risk-taking that combines the other factors; reward is profit." },
          ],
          examTip:
            "If a question gives you a scenario (e.g. a bakery), practise picking out each factor of production from the text — the flour is a raw material (land), the oven is capital, the baker's effort is labour, and the owner risking their savings is enterprise. Naming the reward as well as the factor is what separates a 2-mark answer from a 1-mark answer.",
          modelAnswer: {
            command: "Explain",
            question:
              "using an example, explain why capital is classed as a factor of production (4 marks)",
            marks: 4,
            points: [
              "Capital is a factor of production because it is a manufactured resource used to produce other goods and services, rather than being consumed for its own sake.",
              "For example, a delivery firm's vans are capital: the firm does not gain satisfaction from owning a van directly, it uses the van as an input to help produce its delivery service.",
              "Without capital like this, the firm's labour (drivers) and land (the depot) could not be combined efficiently to produce output at scale.",
              "The reward earned by the owners of capital is interest, which distinguishes it from labour (wages), land (rent) and enterprise (profit).",
            ],
          },
        },
        {
          slug: "the-economic-problem",
          code: "1.2",
          title: "The Basic Economic Problem",
          summary:
            "Scarcity forces every economy and every individual to make choices, and every choice has an opportunity cost.",
          sections: [
            {
              heading: "Scarcity and unlimited wants",
              body: [
                "The basic economic problem is that resources are finite (scarce) while human wants are unlimited. Because there is never enough of everything to satisfy everyone's wants completely, choices about how to use resources are unavoidable.",
                "This applies at every level: individuals choosing how to spend limited income and time, firms choosing how to use limited machinery and staff, and governments choosing how to spend limited tax revenue.",
              ],
            },
            {
              heading: "Opportunity cost",
              body: [
                "Opportunity cost is the value of the next best alternative given up when a choice is made. It is the central idea that links almost every topic in the course back to the basic economic problem.",
                "For example, if the UK government spends an extra £5 billion on the NHS in a Budget, the opportunity cost might be the new schools, defence spending, or tax cuts that money could otherwise have funded.",
                "Opportunity cost applies to individuals too: a student who spends Saturday revising Economics gives up the leisure time (or part-time job earnings) they could have had instead — that forgone alternative is the opportunity cost of revising.",
              ],
            },
            {
              heading: "What, how and for whom",
              body: [
                "Because resources are scarce, every economy has to answer three questions: what to produce, how to produce it (which combination of factors of production to use), and for whom to produce it (who gets to consume the output).",
                "Different economic systems (market, planned, or mixed) answer these three questions in different ways — market economies let price signals decide, planned economies let the government decide, and mixed economies (like the UK's) use a combination of both: markets provide most goods, while the government directly provides some (like the NHS and state education) and regulates others.",
              ],
            },
          ],
          keyTerms: [
            { term: "Scarcity", definition: "The condition where finite resources cannot satisfy unlimited human wants." },
            { term: "Opportunity cost", definition: "The value of the next best alternative given up when making a choice." },
            { term: "Mixed economy", definition: "An economic system combining market forces and government intervention, like the UK." },
          ],
          examTip:
            "Whenever a question asks you to 'discuss' or 'evaluate' a decision, look for a sentence naming the specific opportunity cost — vague statements like 'there are pros and cons' score far fewer marks than 'the opportunity cost of choosing X over Y is...'.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse the opportunity cost faced by a government that increases spending on the NHS (6 marks)",
            marks: 6,
            points: [
              "Government resources (tax revenue) are scarce, so a decision to increase NHS spending means less money is available for other areas of the budget — this is the basic economic problem applied to government decision-making.",
              "The opportunity cost is the next best alternative given up — for example, the same money could instead have funded more school building projects, or been returned to taxpayers as a tax cut.",
              "This opportunity cost is not fixed: it depends on what the government's next-highest priority actually is. If education was the next priority, the opportunity cost is worse school buildings; if defence was next, it is reduced military spending.",
              "There may also be a longer-term opportunity cost: money borrowed to fund the NHS increase, rather than raised through tax, adds to the national debt, meaning future taxpayers face the opportunity cost of higher interest payments on that debt.",
              "Overall, the size of the opportunity cost depends on how tightly resources were already stretched — if the government had a budget surplus, the opportunity cost is smaller than if it has to cut an already-underfunded service to pay for it.",
            ],
          },
        },
        {
          slug: "economic-decision-makers",
          code: "1.3",
          title: "Economic Decision-Makers and Their Objectives",
          summary:
            "Consumers, producers and the government each make different economic decisions, driven by different objectives.",
          sections: [
            {
              heading: "Consumers",
              body: [
                "Consumers decide what to buy with their limited income, generally aiming to maximise utility (satisfaction) from their spending. Their decisions are influenced by price, income, tastes and advertising.",
                "Consumers also increasingly weigh up factors like environmental impact and ethical sourcing (for example, choosing Fairtrade products), showing that utility maximisation isn't purely about price and quantity.",
              ],
            },
            {
              heading: "Producers (firms)",
              body: [
                "Producers decide what to make and how to make it, generally aiming to maximise profit, though some firms pursue other objectives such as growth, market share, or survival, especially in the short run.",
                "A start-up in its first year might prioritise simply surviving and building a customer base over maximising profit immediately — Amazon famously ran at a loss for years while it prioritised growth and market share over short-term profit.",
              ],
            },
            {
              heading: "Government",
              body: [
                "Government decides on tax and spending policy, and on regulation of markets, generally aiming to achieve broader objectives such as economic growth, low unemployment, low and stable inflation, and a fair distribution of income (covered in full in Topic 3).",
              ],
            },
          ],
          diagram: {
            kind: "pie",
            title: "Example: how an average UK household divides its weekly spending",
            slices: [
              { label: "Housing & bills", value: 27 },
              { label: "Transport", value: 13 },
              { label: "Food & drink", value: 15 },
              { label: "Leisure & recreation", value: 13 },
              { label: "Other goods & services", value: 32 },
            ],
            note: "Illustrative example of a household's spending pattern, used to show a consumer allocating limited income across competing wants.",
          },
          keyTerms: [
            { term: "Utility", definition: "The satisfaction a consumer gains from consuming a good or service." },
            { term: "Profit maximisation", definition: "Producing at the output level where the gap between total revenue and total cost is greatest." },
          ],
          examTip:
            "When a question names a specific decision-maker (e.g. 'the government' or 'a firm'), make sure your answer's objective matches that decision-maker — mixing up consumer and producer objectives is a very common lost mark.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss whether profit maximisation is always the main objective of a firm (8 marks)",
            marks: 8,
            points: [
              "Profit maximisation is the traditional assumption in economics: firms are assumed to want to maximise the gap between total revenue and total cost, since profit rewards owners for the risk of enterprise.",
              "For many established, larger firms this holds reasonably well — shareholders expect a return, and managers are often judged and paid based on profit performance.",
              "However, newer or smaller firms often prioritise survival first, especially in a highly competitive market, since a firm that makes no profit at all but stays in business can pursue profit later, while a firm that fails cannot.",
              "Other firms deliberately prioritise growth or market share over short-term profit, on the assumption that a larger customer base will generate greater profit in the long run — this was Amazon's strategy for many years.",
              "Some firms, particularly co-operatives or firms with a strong ethical/environmental mission, may accept lower profit in exchange for other objectives, such as social impact or sustainability, especially where this appeals to increasingly values-driven consumers.",
              "Overall, profit maximisation remains the most useful general assumption for predicting firm behaviour, but real firms often trade it off against growth, survival or ethical objectives depending on their size, age, and market conditions.",
            ],
          },
        },
        {
          slug: "production-possibility-frontiers",
          code: "1.4",
          title: "Production Possibility Frontiers (PPFs)",
          summary:
            "A diagram showing the maximum combinations of two goods an economy can produce with its current resources and technology.",
          sections: [
            {
              heading: "Reading a PPF",
              body: [
                "A production possibility frontier (PPF) plots the maximum output combinations of two goods (or categories of goods) an economy can produce, given fixed resources and a fixed level of technology.",
                "Any point on the curve itself represents full and efficient use of resources. Any point inside the curve represents unemployed or underused resources (productive inefficiency) — for example, an economy in recession with idle factories and unemployed workers. Any point outside the curve is currently unattainable.",
              ],
            },
            {
              heading: "Movements and shifts",
              body: [
                "Moving along the curve (e.g. producing more capital goods and fewer consumer goods) illustrates opportunity cost directly — more of one good can only be produced by giving up some of the other.",
                "A shift of the whole curve outward represents economic growth — an increase in the economy's productive potential, caused by more resources (e.g. a larger workforce through immigration or higher birth rates) or better technology (e.g. AI and automation raising output per worker). A shift inward represents a fall in productive potential, e.g. after a natural disaster or a major loss of skilled workers.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "A production possibility frontier: consumer goods vs. capital goods",
            xLabel: "Consumer goods",
            yLabel: "Capital goods",
            curves: [
              {
                id: "ppf-original",
                points: [
                  [0, 88],
                  [20, 86],
                  [40, 78],
                  [60, 62],
                  [80, 38],
                  [92, 0],
                ],
                color: "navy",
                label: "PPF (current resources)",
                labelPos: "start",
              },
              {
                id: "ppf-shifted",
                points: [
                  [0, 100],
                  [22, 98],
                  [46, 90],
                  [68, 72],
                  [88, 44],
                  [100, 0],
                ],
                color: "gold-dashed",
                label: "PPF after growth",
                labelPos: "start",
              },
            ],
            shift: {
              fromCurveId: "ppf-original",
              toCurveId: "ppf-shifted",
              label: "Economic growth",
            },
            note: "Point X (inside the original curve) would show unemployed resources; any point on the solid curve shows full, efficient use of resources; the dashed curve shows the new frontier after economic growth.",
          },
          keyTerms: [
            { term: "Productive efficiency", definition: "Producing on the PPF, using resources fully with no waste." },
            { term: "Economic growth (PPF)", definition: "An outward shift of the PPF, showing increased productive potential." },
          ],
          examTip:
            "Always state clearly whether a change is a movement along the PPF (a trade-off between two goods with existing resources) or a shift of the PPF (a change in the total resources or technology available) — examiners specifically reward this distinction, and it is one of the most commonly confused points in the whole course.",
          modelAnswer: {
            command: "Explain",
            question:
              "using a PPF diagram, explain the difference between a point inside the curve and a point on the curve (6 marks)",
            marks: 6,
            points: [
              "A PPF shows the maximum combinations of two goods an economy can produce using all of its resources fully and efficiently.",
              "A point on the curve represents productive efficiency: all available resources (land, labour, capital, enterprise) are being used, with no waste or unemployment.",
              "A point inside the curve represents an economy that is not using its resources fully — for example, during a recession, when factories run below capacity and some workers are unemployed.",
              "Moving from a point inside the curve to a point on the curve therefore represents increased output without needing any new resources, simply by using existing resources more fully — this is different from economic growth, which shifts the whole curve outward.",
              "A point outside the curve is currently unattainable with the economy's existing resources and technology; it could only become reachable after economic growth shifts the PPF outward.",
            ],
          },
        },
      ],
    },
    {
      slug: "markets-and-money",
      code: "Topic 2",
      title: "The Role of Markets and Money",
      description:
        "How demand and supply set prices, how competition shapes markets, how firms organise production, how the labour market works, and what money and financial markets do.",
      subtopics: [
        {
          slug: "demand",
          code: "2.1",
          title: "Demand",
          summary:
            "The quantity of a good or service consumers are willing and able to buy at a given price, and what shifts it.",
          sections: [
            {
              heading: "The law of demand",
              body: [
                "The law of demand states that as the price of a good falls, the quantity demanded rises, and as price rises, quantity demanded falls — all else remaining equal. This gives a demand curve that slopes downward from left to right.",
                "A movement along the demand curve is caused only by a change in the price of the good itself. If the price of a cinema ticket falls from £12 to £8, more tickets will be demanded — this is a movement along the existing demand curve, not a new curve.",
              ],
            },
            {
              heading: "Shifts in demand (conditions of demand)",
              body: [
                "A shift of the entire demand curve is caused by a change in a factor other than the good's own price. Key factors include: income (for normal goods, higher income shifts demand right; for inferior goods, higher income shifts demand left), the price of substitutes and complements, tastes and fashion, advertising, population, and expectations of future price changes.",
                "For example, when household incomes rose after several years of wage growth, demand for holidays abroad (a normal good) increased at every price — shown as a rightward shift of the whole demand curve, not just a movement along it.",
              ],
            },
            {
              heading: "Elasticity of demand",
              body: [
                "Price elasticity of demand (PED) measures how responsive quantity demanded is to a change in price, calculated as %ΔQuantity demanded ÷ %ΔPrice. Demand is price elastic if PED is greater than 1 (quantity demanded changes proportionally more than price), and price inelastic if PED is less than 1.",
                "Goods with close substitutes (a specific brand of trainers), that take up a large share of income (a car), or are luxuries (a foreign holiday) tend to have more elastic demand. Necessities (bread, electricity) and goods with brand loyalty or addictive qualities (cigarettes, petrol) tend to have more inelastic demand.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "A shift in demand caused by rising incomes",
            xLabel: "Quantity",
            yLabel: "Price",
            curves: [
              {
                id: "d1",
                points: [
                  [4, 92],
                  [30, 62],
                  [58, 34],
                  [86, 8],
                ],
                color: "navy",
                label: "D1",
                labelPos: "end",
              },
              {
                id: "d2",
                points: [
                  [16, 96],
                  [42, 66],
                  [70, 38],
                  [96, 10],
                ],
                color: "gold-dashed",
                label: "D2",
                labelPos: "end",
              },
            ],
            shift: {
              fromCurveId: "d1",
              toCurveId: "d2",
              label: "Higher income (normal good)",
            },
            note: "At every price level, quantity demanded is now higher — the whole curve has shifted right from D1 to D2, not moved along D1.",
          },
          keyTerms: [
            { term: "Demand", definition: "The quantity of a good consumers are willing and able to buy at a given price." },
            { term: "Normal good", definition: "A good for which demand rises as income rises." },
            { term: "Inferior good", definition: "A good for which demand falls as income rises." },
            { term: "Price elasticity of demand", definition: "The responsiveness of quantity demanded to a change in price." },
          ],
          examTip:
            "Keep 'a change in price' (movement along the curve) and 'a change in any other factor' (shift of the curve) strictly separate in your answers — examiners often penalise diagrams that shift the curve for a price change. If the question gives you a price change, draw a movement; if it gives you anything else, draw a shift.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse the likely effect of a rise in household incomes on the demand for foreign holidays (6 marks)",
            marks: 6,
            points: [
              "A foreign holiday is a normal good for most households, meaning demand for it rises as income rises.",
              "As household incomes increase, consumers have more disposable income available to spend on non-essential items like holidays, in addition to their existing spending on necessities.",
              "This causes the whole demand curve for foreign holidays to shift to the right (from D1 to D2), meaning more holidays are demanded at every price level, not just at a lower price.",
              "The size of the shift depends on the income elasticity of demand for holidays — since holidays are a luxury for many households, demand may rise proportionally more than the rise in income (income elastic).",
              "In the market, this rightward shift in demand, with supply unchanged in the short run, would be expected to push up both the equilibrium price and quantity of holidays sold, as travel firms respond to greater demand.",
            ],
          },
        },
        {
          slug: "supply",
          code: "2.2",
          title: "Supply",
          summary:
            "The quantity of a good or service producers are willing and able to sell at a given price, and what shifts it.",
          sections: [
            {
              heading: "The law of supply",
              body: [
                "The law of supply states that as the price of a good rises, the quantity supplied rises, because higher prices make production more profitable — all else remaining equal. This gives a supply curve that slopes upward from left to right.",
              ],
            },
            {
              heading: "Shifts in supply (conditions of supply)",
              body: [
                "A shift of the supply curve is caused by a change in a factor other than the good's own price: the cost of raw materials and other inputs, wage costs, taxes and subsidies, technology and productivity, the number of firms in the market, and weather (for agricultural goods).",
                "For example, a sharp rise in wholesale gas prices (as happened across Europe in 2022) raised production costs for energy-intensive manufacturers, shifting their supply curves left — less was supplied at every price than before.",
              ],
            },
            {
              heading: "Elasticity of supply",
              body: [
                "Price elasticity of supply (PES) measures how responsive quantity supplied is to a change in price. Supply tends to be more elastic when firms hold spare capacity or stock, and when production can be scaled up quickly; it tends to be more inelastic when production takes a long time or capacity is fixed, as with many agricultural goods in the short run (a farmer cannot instantly grow more wheat, however high the price rises).",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "A shift in supply caused by rising production costs",
            xLabel: "Quantity",
            yLabel: "Price",
            curves: [
              {
                id: "s1",
                points: [
                  [10, 6],
                  [36, 34],
                  [64, 62],
                  [90, 92],
                ],
                color: "navy",
                label: "S1",
                labelPos: "end",
              },
              {
                id: "s2",
                points: [
                  [22, 8],
                  [48, 36],
                  [76, 64],
                  [100, 94],
                ],
                color: "gold-dashed",
                label: "S2",
                labelPos: "end",
              },
            ],
            shift: {
              fromCurveId: "s1",
              toCurveId: "s2",
              label: "Higher input costs",
            },
            note: "Higher production costs shift the whole supply curve left/up from S1 to S2 — less is supplied at every price than before.",
          },
          keyTerms: [
            { term: "Supply", definition: "The quantity of a good producers are willing and able to sell at a given price." },
            { term: "Price elasticity of supply", definition: "The responsiveness of quantity supplied to a change in price." },
            { term: "Subsidy", definition: "A payment from government to a producer that lowers the cost of production and shifts supply right." },
          ],
          examTip:
            "A tax on a good shifts supply left (higher cost of production); a subsidy shifts supply right (lower cost of production) — practise drawing both shifts and reading off the new equilibrium price and quantity, since this is one of the most frequently examined diagram skills at GCSE.",
          modelAnswer: {
            command: "Explain",
            question:
              "explain, using a diagram, the effect of a government subsidy on the supply of electric buses (6 marks)",
            marks: 6,
            points: [
              "A subsidy is a payment from the government to a producer, which lowers the producer's cost of production.",
              "Lower production costs mean electric bus manufacturers are willing and able to supply more buses at every price than before, since each bus is now cheaper for them to produce.",
              "On a diagram, this is shown as a rightward shift of the whole supply curve, from S1 to S2 — this is a shift, not a movement along the curve, because the subsidy is not a change in the bus's own price.",
              "With demand unchanged, the new equilibrium (where the new supply curve S2 crosses the demand curve) will have a lower price and a higher quantity of electric buses sold than before.",
              "This matches a real government objective: subsidies for electric vehicles are used to make green transport more affordable and increase adoption, correcting the market failure caused by the negative externality of petrol/diesel buses' emissions (see Topic 3.8).",
            ],
          },
        },
        {
          slug: "price-determination",
          code: "2.3",
          title: "Price Determination and the Price Mechanism",
          summary:
            "How the interaction of demand and supply sets the market equilibrium price, and how prices allocate resources.",
          sections: [
            {
              heading: "Equilibrium",
              body: [
                "Market equilibrium occurs where the demand curve and supply curve intersect — the price at which quantity demanded exactly equals quantity supplied, so there is no pressure for price to change.",
                "If price is set above equilibrium, quantity supplied exceeds quantity demanded, creating excess supply (a surplus), which pushes price back down as firms cut prices to clear unsold stock. If price is below equilibrium, quantity demanded exceeds quantity supplied, creating excess demand (a shortage), which pushes price back up as firms realise they can charge more.",
              ],
            },
            {
              heading: "The price mechanism",
              body: [
                "The price mechanism is the process by which changes in price, driven by shifts in demand and supply, allocate scarce resources in a market economy. Rising prices signal to producers that a good is in higher demand relative to supply, giving them an incentive to produce more; falling prices signal the opposite.",
                "This is how a market economy answers 'what, how, and for whom to produce' without central planning — through the independent decisions of buyers and sellers responding to price signals. A real example: when demand for second-hand car parts spiked during global semiconductor shortages, rising used-car prices signalled to sellers that it was more profitable to sell used cars than scrap them, shifting supply within that market.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Market equilibrium: demand meets supply",
            xLabel: "Quantity",
            yLabel: "Price",
            curves: [
              {
                id: "demand",
                points: [
                  [4, 92],
                  [30, 62],
                  [58, 34],
                  [86, 8],
                ],
                color: "navy",
                label: "Demand",
                labelPos: "end",
              },
              {
                id: "supply",
                points: [
                  [10, 6],
                  [36, 34],
                  [64, 62],
                  [90, 92],
                ],
                color: "gold",
                label: "Supply",
                labelPos: "end",
              },
            ],
            equilibrium: { x: 48, y: 48, label: "Equilibrium (P*, Q*)" },
            note: "Above equilibrium price there is excess supply, pushing price down; below it there is excess demand, pushing price up — the market is only at rest at the point where the two curves cross.",
          },
          keyTerms: [
            { term: "Equilibrium price", definition: "The price at which quantity demanded equals quantity supplied." },
            { term: "Excess demand", definition: "A shortage; quantity demanded exceeds quantity supplied at the current price." },
            { term: "Excess supply", definition: "A surplus; quantity supplied exceeds quantity demanded at the current price." },
          ],
          examTip:
            "When asked to analyse the effect of an event on a market (e.g. a bad harvest, a new tax, a rise in incomes), work through the chain in order: which curve shifts → which direction → new equilibrium price → new equilibrium quantity. Marks are given for each correct step, not just the final answer.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse the effect of a poor wheat harvest on the market for bread (6 marks)",
            marks: 6,
            points: [
              "A poor wheat harvest reduces the supply of wheat, a key raw material for bread, raising bread producers' costs.",
              "This causes the supply curve for bread to shift left, since bakers are willing and able to supply less bread at every price than before, given their higher input costs.",
              "With demand for bread unchanged, the new equilibrium — where the new, higher supply curve crosses the existing demand curve — will be at a higher price and a lower quantity than before.",
              "Because bread is a necessity with few close substitutes for many households, demand is likely to be price inelastic, meaning quantity demanded falls only a little even as price rises noticeably.",
              "The overall effect is a fairly large rise in the price of bread but only a small fall in the quantity bought and sold, since inelastic demand means consumers keep buying bread even as it becomes more expensive.",
            ],
          },
        },
        {
          slug: "competition-and-market-structures",
          code: "2.4",
          title: "Competition and Market Structures",
          summary:
            "How the number of firms and the degree of competition in a market affects prices, choice and efficiency.",
          sections: [
            {
              heading: "Perfect competition vs. monopoly",
              body: [
                "At one extreme, perfect competition describes a market with many small firms selling an identical product, easy entry and exit, and no single firm able to influence the market price — firms are 'price takers'. Real markets rarely match this exactly, but some agricultural markets come close.",
                "At the other extreme, a monopoly exists when a single firm dominates a market, facing little or no competition. A monopolist is a 'price maker' and can restrict output to charge higher prices than would exist under competition. In the UK, water companies operate as regional monopolies, which is why they are heavily regulated by Ofwat.",
              ],
            },
            {
              heading: "Effects of competition",
              body: [
                "Greater competition tends to benefit consumers through lower prices, more choice, and pressure on firms to innovate and improve quality — the UK supermarket sector, with several large chains competing on price, is a commonly cited example.",
                "Less competition (as in a monopoly) tends to allow higher prices, less choice, and less incentive to innovate, though large firms can also achieve economies of scale (lower average costs from producing on a larger scale) that can, in some cases, be passed on to consumers as lower prices.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Approximate market share of the largest firm, by market structure",
            yLabel: "Largest firm's market share (%)",
            bars: [
              { label: "Perfect comp.", value: 5 },
              { label: "Monopolistic comp.", value: 15 },
              { label: "Oligopoly", value: 35 },
              { label: "Monopoly", value: 90, highlight: true },
            ],
            note: "Illustrative pattern: as a market structure moves toward monopoly, the largest firm typically controls a much greater share of total sales.",
          },
          keyTerms: [
            { term: "Monopoly", definition: "A market dominated by a single firm with significant power over price." },
            { term: "Price taker", definition: "A firm that must accept the market price because it has no power to influence it." },
            { term: "Barriers to entry", definition: "Obstacles that make it difficult for new firms to enter a market." },
          ],
          examTip:
            "Use real, well-known examples (a local corner shop or farmers' market for high competition, a national water company or rail operator for low competition) to anchor evaluation points — examiners reward specific, relevant application over generic theory.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss whether more competition in a market is always good for consumers (8 marks)",
            marks: 8,
            points: [
              "More competition usually benefits consumers because firms competing for the same customers have an incentive to keep prices lower than a monopolist would charge, since a firm that overprices will simply lose customers to a rival.",
              "Competition also tends to drive innovation and improved quality, as firms try to differentiate themselves — the ongoing competition between UK mobile network providers on price, coverage and data allowances is one example.",
              "However, very intense competition between many small firms can prevent any single firm from reaching economies of scale, meaning average costs (and therefore prices) may stay higher than they would under a slightly larger, more efficient firm.",
              "In some industries, a degree of market concentration allows for large-scale investment that smaller competitive firms could not afford — for example, the huge upfront cost of building a national rail or energy network makes a competitive market of many small suppliers impractical.",
              "Overall, moderate competition tends to give consumers the best combination of low prices, choice and continued investment, while both extremes — a single unregulated monopolist and an overly fragmented market of tiny firms — can each have downsides for consumers in different ways.",
            ],
          },
        },
        {
          slug: "production-and-division-of-labour",
          code: "2.5",
          title: "Production, Specialisation and the Division of Labour",
          summary:
            "Why breaking production into specialised tasks raises output, and the trade-offs this creates.",
          sections: [
            {
              heading: "Specialisation",
              body: [
                "Specialisation occurs when individuals, firms, regions or countries concentrate on producing a narrow range of goods or tasks rather than trying to be self-sufficient.",
                "The division of labour is a specific form of specialisation where the production process is split into separate tasks, with different workers each focusing on one task — the classic example is a car factory production line, where one worker fits doors, another fits windscreens, and another handles paintwork.",
              ],
            },
            {
              heading: "Benefits and drawbacks",
              body: [
                "Benefits include higher output per worker (workers become highly skilled and fast at one task through repetition), time saved not switching between tasks, and the ability to use specialised machinery designed for one specific job.",
                "Drawbacks include monotonous, repetitive work that can lower worker motivation and job satisfaction, over-dependence on one narrow skill (making workers vulnerable if that task is automated or the firm closes), and the risk that a single breakdown in the production line halts all output, since each worker depends on the previous stage being completed.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Illustrative effect of division of labour on output per worker",
            yLabel: "Units produced per worker per day",
            bars: [
              { label: "Each worker makes a whole product", value: 4 },
              { label: "Workers specialise in one task", value: 14, highlight: true },
            ],
            note: "Illustrative example based on the classic pin-factory idea (Adam Smith): splitting production into specialised tasks can massively raise output per worker.",
          },
          keyTerms: [
            { term: "Specialisation", definition: "Concentrating on producing a narrow range of goods or tasks." },
            { term: "Division of labour", definition: "Splitting a production process into separate, specialised tasks." },
          ],
          examTip:
            "This subtopic is a favourite for 'discuss the advantages and disadvantages' questions — always pair each advantage with a linked disadvantage (e.g. higher output vs. worker demotivation) rather than listing them separately, and try to use a specific example like a car production line rather than staying fully abstract.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss the advantages and disadvantages of the division of labour for a car manufacturer (8 marks)",
            marks: 8,
            points: [
              "The division of labour allows each worker on a car production line to specialise in one repeated task, such as fitting doors, which they can learn to do quickly and accurately through repetition.",
              "This raises output per worker and lowers average production costs, since specialised workers waste no time switching between different tasks and can be paired with machinery designed for that single job.",
              "However, highly repetitive work can reduce worker motivation and job satisfaction over time, potentially increasing staff turnover and absenteeism, which itself carries a cost to the firm in recruitment and retraining.",
              "The production line also creates interdependence: if one stage breaks down (for example, a machinery fault at the paint-spraying stage), the whole line can be forced to stop, halting output completely rather than just slowing it.",
              "Workers whose skills are narrow and task-specific may also find it harder to find alternative employment if their task is automated, which is a growing risk as robotics increasingly takes over repetitive manufacturing tasks.",
              "Overall, the division of labour is likely to benefit a car manufacturer's costs and output significantly, but the firm needs to manage the human and operational risks (motivation, single points of failure) that come with it.",
            ],
          },
        },
        {
          slug: "the-labour-market",
          code: "2.6",
          title: "The Labour Market",
          summary:
            "How wages are determined by the demand for and supply of labour, and the role of trade unions.",
          sections: [
            {
              heading: "Demand for and supply of labour",
              body: [
                "The demand for labour comes from firms and is a 'derived demand' — firms only want workers because of the demand for the goods and services those workers help produce. Demand for labour rises with the productivity of workers and the price of the good they produce.",
                "The supply of labour is influenced by wage rates, the number of qualified workers, working conditions, and non-monetary factors such as job satisfaction. A rise in the National Minimum/Living Wage, for example, can increase the supply of labour into low-paid sectors by making those jobs more attractive relative to not working.",
              ],
            },
            {
              heading: "Wage determination",
              body: [
                "In a competitive labour market, the equilibrium wage rate is set where the demand for labour equals the supply of labour, using exactly the same logic as demand and supply for goods.",
                "Wages differ between occupations mainly because of differences in the skills required, the level of risk/unpleasantness of the job, and how many people are qualified and willing to do it (i.e. differences in labour supply relative to demand) — a heart surgeon earns far more than a retail assistant partly because years of training create a much smaller supply of qualified surgeons relative to the demand for their skills.",
              ],
            },
            {
              heading: "Trade unions",
              body: [
                "Trade unions are organisations that represent workers, negotiating collectively with employers over pay and working conditions. By bargaining as a group rather than individually, unions can secure higher wages or better conditions than individual workers might achieve alone, though critics argue this can also raise costs for firms and reduce employment if wages are pushed above the market equilibrium.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Wage determination in a competitive labour market",
            xLabel: "Quantity of labour",
            yLabel: "Wage rate",
            curves: [
              {
                id: "labour-demand",
                points: [
                  [4, 92],
                  [30, 62],
                  [58, 34],
                  [86, 8],
                ],
                color: "navy",
                label: "Demand for labour",
                labelPos: "end",
              },
              {
                id: "labour-supply",
                points: [
                  [10, 6],
                  [36, 34],
                  [64, 62],
                  [90, 92],
                ],
                color: "gold",
                label: "Supply of labour",
                labelPos: "end",
              },
            ],
            equilibrium: { x: 48, y: 48, label: "Equilibrium wage" },
            note: "Exactly the same logic as a goods market: the wage rate settles where the number of workers firms want to hire equals the number of workers willing to work at that wage.",
          },
          keyTerms: [
            { term: "Derived demand", definition: "Demand for a resource (like labour) that exists only because of demand for the good it helps produce." },
            { term: "Trade union", definition: "An organisation representing workers in negotiations with employers." },
          ],
          examTip:
            "If asked why one job pays more than another, structure your answer around supply and demand for that specific type of labour, not just 'it's a harder job' — link difficulty of training back to a smaller supply of qualified workers relative to demand.",
          modelAnswer: {
            command: "Explain",
            question:
              "explain why a qualified surgeon typically earns a higher wage than a retail assistant (6 marks)",
            marks: 6,
            points: [
              "Wages are determined by the demand for and supply of labour in each specific occupation, not by how 'hard' a job feels alone.",
              "Becoming a surgeon requires many years of expensive, difficult training, which greatly limits the supply of people qualified and willing to do the job — the labour supply curve for surgeons sits far to the left compared with retail work.",
              "Demand for surgeons is also high, since hospitals urgently need their specific skills and there is no easy substitute for a trained surgeon's labour.",
              "Combining low supply with high demand pushes the equilibrium wage for surgeons well above the equilibrium wage in retail, where the supply of willing and able workers is much larger relative to demand, since the skills required are far easier to acquire.",
              "The risk and responsibility involved in surgery may also justify a wage premium, but the core economic explanation is the mismatch between the small supply of surgeons and the size of demand for their labour.",
            ],
          },
        },
        {
          slug: "money-and-financial-markets",
          code: "2.7",
          title: "Money and Financial Markets",
          summary:
            "The functions money performs, and the role banks and other financial institutions play in the economy.",
          sections: [
            {
              heading: "Functions of money",
              body: [
                "Money performs four functions: a medium of exchange (accepted in payment for goods and services, avoiding the need for barter), a measure of value (a common unit for comparing the value of different goods), a store of value (it can be saved and used later without losing its purchasing power too quickly), and a standard for deferred payment (it can be used to settle debts due in the future).",
              ],
            },
            {
              heading: "Financial institutions",
              body: [
                "Commercial banks (such as Barclays, NatWest or HSBC in the UK) accept deposits from savers and provide loans to borrowers, earning profit mainly from the difference between interest paid on deposits and interest charged on loans. They also provide payment services such as current accounts and card payments.",
                "The Bank of England is the UK's central bank. It sets the base interest rate (Bank Rate) as part of monetary policy, issues currency, and acts as a regulator and 'lender of last resort' to the banking system to maintain financial stability — a role it played prominently during the 2008 financial crisis.",
                "Financial markets (such as the London Stock Exchange) allow firms to raise finance by selling shares or bonds to investors, and allow savers to invest their money in the hope of a return.",
              ],
            },
          ],
          diagram: {
            kind: "line",
            title: "The Bank of England's Bank Rate, illustrative recent path",
            yLabel: "Bank Rate (%)",
            points: [
              { label: "2021", value: 0.25 },
              { label: "2022", value: 3.5 },
              { label: "2023", value: 5.25 },
              { label: "2024", value: 4.75 },
              { label: "2025", value: 4.0 },
            ],
            note: "Illustrative path showing the real pattern: rates were held near zero, then raised sharply from 2022 to fight high inflation, then gradually cut again as inflation eased — see Topic 3.6 for how this affects the wider economy.",
          },
          keyTerms: [
            { term: "Medium of exchange", definition: "An item accepted in payment for goods and services." },
            { term: "Central bank", definition: "The institution (the Bank of England in the UK) responsible for monetary policy and financial stability." },
            { term: "Lender of last resort", definition: "The central bank's role of lending to banks in a crisis to prevent the banking system collapsing." },
          ],
          examTip:
            "If asked to explain a function of money, always give a concrete mini-example for each function (e.g. 'as a store of value, someone can save £50 today and it will still buy roughly £50 of goods in a few months') — bare definitions alone rarely score full marks.",
          modelAnswer: {
            command: "Explain",
            question:
              "explain two functions of money, using an example for each (4 marks)",
            marks: 4,
            points: [
              "Money acts as a medium of exchange: it is widely accepted in payment for goods and services, which avoids the problem of barter, where both sides of a trade would need to want exactly what the other person has. For example, a worker is paid in money, which they can then use to buy groceries, rather than having to trade their specific skill directly for food.",
              "Money also acts as a store of value: because it holds its purchasing power reasonably well over time (assuming low inflation), it can be saved now and used later. For example, someone can put £100 into a savings account and expect to be able to buy roughly £100 of goods with it a few months later, rather than the money losing its usefulness immediately.",
            ],
          },
        },
      ],
    },
    {
      slug: "government-and-objectives",
      code: "Topic 3",
      title: "Economic Objectives and the Role of Government",
      description:
        "The government's macroeconomic objectives — growth, employment, stable prices, fair distribution — and the fiscal, monetary and supply-side tools used to pursue them, plus why markets sometimes fail.",
      subtopics: [
        {
          slug: "economic-growth",
          code: "3.1",
          title: "Economic Growth",
          summary:
            "How growth is measured, its causes, and the benefits and costs of a growing economy.",
          sections: [
            {
              heading: "Measuring growth",
              body: [
                "Economic growth is measured as the percentage change in real Gross Domestic Product (GDP) — the total value of goods and services produced in an economy over a period, adjusted for inflation ('real' means inflation has been removed so the figure reflects actual output, not just rising prices).",
                "The business (trade) cycle describes the pattern of economic growth over time, moving through boom, downturn/recession, slump and recovery. A recession is commonly defined as two consecutive quarters of negative growth, as the UK experienced briefly in 2023.",
              ],
            },
            {
              heading: "The AD/AS model",
              body: [
                "Economists often show the whole economy using an aggregate demand (AD) and aggregate supply (AS) diagram — the macroeconomic equivalent of the demand/supply model, but for the whole economy rather than a single market. The vertical axis shows the general price level and the horizontal axis shows real output (real GDP).",
                "Aggregate demand is the total spending on UK goods and services: consumer spending, investment by firms, government spending, and net exports (exports minus imports). Aggregate supply is the total output firms in the economy are willing and able to produce at each price level.",
                "Short-run growth can come from using existing spare capacity more fully, shown as a rightward shift of AD along an unchanged AS curve. Long-run growth requires an increase in the economy's productive potential — more or better quality factors of production, and improved technology — shown as a rightward shift of the AS curve itself (equivalent to an outward shift of the PPF, see 1.4).",
              ],
            },
            {
              heading: "Benefits and costs of growth",
              body: [
                "Benefits include higher average incomes and living standards, more jobs, and higher tax revenue for the government to spend on public services.",
                "Costs can include a wider gap between rich and poor if growth is not evenly shared, environmental damage (pollution, resource depletion), and inflationary pressure if growth happens too fast for the economy to keep up with (demand-pull inflation, see 3.3).",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Long-run economic growth: aggregate supply shifts right",
            xLabel: "Real GDP (output)",
            yLabel: "Price level",
            curves: [
              {
                id: "ad",
                points: [
                  [6, 88],
                  [32, 58],
                  [60, 32],
                  [88, 10],
                ],
                color: "muted",
                label: "AD",
                labelPos: "end",
              },
              {
                id: "as1",
                points: [
                  [30, 4],
                  [34, 40],
                  [38, 96],
                ],
                color: "navy",
                label: "AS1",
                labelPos: "start",
              },
              {
                id: "as2",
                points: [
                  [52, 4],
                  [56, 40],
                  [60, 96],
                ],
                color: "gold-dashed",
                label: "AS2",
                labelPos: "start",
              },
            ],
            shift: {
              fromCurveId: "as1",
              toCurveId: "as2",
              label: "More/better resources, new technology",
            },
            note: "An outward shift of aggregate supply (AS1 to AS2) allows the economy to produce more real output at the same or lower price level — this is the AD/AS equivalent of an outward-shifting PPF.",
          },
          keyTerms: [
            { term: "GDP", definition: "The total value of goods and services produced in an economy over a period." },
            { term: "Real GDP", definition: "GDP adjusted to remove the effect of inflation." },
            { term: "Business cycle", definition: "The pattern of fluctuation in economic growth: boom, downturn, slump, recovery." },
            { term: "Aggregate demand (AD)", definition: "Total planned spending on an economy's goods and services at each price level." },
            { term: "Aggregate supply (AS)", definition: "Total output firms are willing and able to produce at each price level." },
          ],
          examTip:
            "Distinguish clearly between short-run growth (using existing spare capacity, shown by AD shifting along an unchanged AS) and long-run growth (the economy's capacity itself increasing, shown by AS shifting right) — mixing these two up is a common error at the top grades.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse the difference between short-run and long-run economic growth (6 marks)",
            marks: 6,
            points: [
              "Short-run economic growth happens when the economy makes fuller use of resources it already has — for example, firms with spare factory capacity hiring more workers to meet a rise in demand.",
              "On an AD/AS diagram, this is shown as a rightward shift of aggregate demand along an unchanged aggregate supply curve, raising real output without any increase in the economy's underlying productive capacity.",
              "Long-run economic growth, by contrast, requires an increase in the economy's total productive potential — more factors of production, or the same factors used more productively through better technology.",
              "This is shown as a rightward shift of the aggregate supply curve itself, equivalent to an outward shift of the economy's PPF, meaning more output is possible even without any extra demand.",
              "The key difference is sustainability: short-run growth can quickly hit a limit once spare capacity runs out, risking inflation, whereas long-run growth raises the ceiling on what the economy can produce without that inflationary pressure.",
            ],
          },
        },
        {
          slug: "unemployment",
          code: "3.2",
          title: "Unemployment",
          summary:
            "How unemployment is measured, its main types and causes, and its economic and social costs.",
          sections: [
            {
              heading: "Measuring unemployment",
              body: [
                "The unemployment rate is the percentage of the economically active population (those in work or actively seeking work) who are without a job but available for and actively seeking work. In the UK, this is measured through the Labour Force Survey and published by the Office for National Statistics (ONS).",
              ],
            },
            {
              heading: "Types and causes",
              body: [
                "Cyclical (demand-deficient) unemployment is caused by a fall in aggregate demand during a downturn, when firms need fewer workers — unemployment rose sharply during the 2008-09 recession for this reason.",
                "Structural unemployment occurs when the skills of workers no longer match the jobs available, often because of long-term shifts in the economy — the decline of UK coal mining and steel manufacturing left many workers structurally unemployed as those industries shrank.",
                "Frictional unemployment is short-term, occurring when people are between jobs, e.g. searching for a new role after leaving a previous one.",
                "Seasonal unemployment occurs in industries where demand for labour varies predictably through the year, such as agriculture (fewer workers needed outside harvest season) or tourism (fewer workers needed outside peak season).",
              ],
            },
            {
              heading: "Costs of unemployment",
              body: [
                "For individuals: lost income, lower living standards, and potential loss of skills and confidence the longer unemployment lasts.",
                "For the economy: lower output than the economy is capable of (a waste of resources, shown as a point inside the PPF), lower tax revenue, higher government spending on benefits, and potential social costs linked to poverty and inequality.",
              ],
            },
          ],
          diagram: {
            kind: "line",
            title: "UK unemployment rate, illustrative recent trend",
            yLabel: "Unemployment rate (%)",
            points: [
              { label: "2019", value: 3.8 },
              { label: "2020", value: 4.6 },
              { label: "2021", value: 4.5 },
              { label: "2022", value: 3.7 },
              { label: "2023", value: 4.2 },
              { label: "2024", value: 4.4 },
            ],
            note: "Illustrative pattern: unemployment rose during the 2020 pandemic downturn, fell back as the economy recovered, then edged up again — showing how the rate tracks the business cycle described in 3.1.",
          },
          keyTerms: [
            { term: "Cyclical unemployment", definition: "Unemployment caused by a fall in aggregate demand during a downturn." },
            { term: "Structural unemployment", definition: "Unemployment caused by a mismatch between workers' skills and available jobs." },
            { term: "Frictional unemployment", definition: "Short-term unemployment while people move between jobs." },
          ],
          examTip:
            "When a case study describes a cause of unemployment, name the correct type first, then explain the mechanism — e.g. 'this is structural unemployment because the workers' skills (coal mining) no longer match the jobs available after the industry declined,' rather than just saying 'people lost their jobs.'",
          modelAnswer: {
            command: "Explain",
            question:
              "explain why the closure of a region's main coal mine is likely to cause structural, rather than frictional, unemployment (4 marks)",
            marks: 4,
            points: [
              "Structural unemployment is caused by a long-term mismatch between the skills workers have and the skills needed in jobs actually available, often following the decline of a whole industry.",
              "Former coal miners typically have skills specific to mining, which may not transfer easily to the jobs available in a region after the mine closes, especially if few alternative industries exist locally.",
              "This differs from frictional unemployment, which is short-term and occurs simply while someone searches for a new role in broadly the same type of work — coal miners face a deeper, longer-lasting mismatch rather than a brief search period.",
              "Without retraining or new industries moving into the area, this structural unemployment can persist for years, which is why governments often respond with retraining schemes or investment incentives for former industrial regions.",
            ],
          },
        },
        {
          slug: "inflation-and-price-stability",
          code: "3.3",
          title: "Inflation and Price Stability",
          summary:
            "What inflation is, how it is measured, its causes, and why the government targets low and stable inflation.",
          sections: [
            {
              heading: "Measuring inflation",
              body: [
                "Inflation is a sustained rise in the general price level of an economy over time, measured mainly by the Consumer Prices Index (CPI), which tracks the price of a representative 'basket' of goods and services bought by a typical household, updated each year to reflect changing spending habits.",
                "The UK government sets an inflation target of 2% CPI, which the Bank of England is responsible for meeting through monetary policy (see 3.6). If inflation moves more than 1 percentage point away from target, the Bank's Governor must write an open letter to the Chancellor explaining why.",
              ],
            },
            {
              heading: "Causes of inflation",
              body: [
                "Demand-pull inflation occurs when aggregate demand grows faster than the economy's productive capacity, pulling prices up — shown as aggregate demand shifting right faster than aggregate supply can keep up.",
                "Cost-push inflation occurs when the costs of production rise (e.g. higher wages, higher raw material or energy prices), causing firms to raise prices to protect their profit margins. The sharp rise in UK inflation in 2022, which peaked at around 11%, was driven mainly by a spike in global energy and food prices following Russia's invasion of Ukraine — a clear real-world example of cost-push inflation.",
              ],
            },
            {
              heading: "Costs of inflation",
              body: [
                "High or unpredictable inflation erodes the purchasing power of money and savings, particularly harming those on fixed incomes such as pensioners. It creates uncertainty for firms making investment decisions, and can make a country's exports less competitive if prices rise faster than in other countries.",
                "Deflation (a fall in the general price level) is also considered a problem: it can encourage consumers to delay spending in expectation of even lower prices, weakening demand further, and it increases the real burden of existing debts.",
              ],
            },
          ],
          diagram: {
            kind: "line",
            title: "UK CPI inflation rate, illustrative recent trend",
            yLabel: "CPI inflation (%)",
            points: [
              { label: "2020", value: 0.9 },
              { label: "2021", value: 2.6 },
              { label: "2022", value: 9.1 },
              { label: "2023", value: 7.3 },
              { label: "2024", value: 2.6 },
              { label: "2025", value: 2.2 },
            ],
            note: "Illustrative path showing the real pattern: inflation surged in 2022 (mainly cost-push, driven by energy and food prices) and fell back toward the 2% target as those cost pressures eased.",
          },
          keyTerms: [
            { term: "Inflation", definition: "A sustained rise in the general price level over time." },
            { term: "CPI", definition: "Consumer Prices Index; the main UK measure of inflation, tracking a basket of goods and services." },
            { term: "Deflation", definition: "A sustained fall in the general price level." },
          ],
          examTip:
            "Always specify which type of inflation a scenario describes (demand-pull or cost-push) — a question about rising energy prices pushing up costs is cost-push, not demand-pull, even though the end result (higher prices) looks the same. The 2022 UK inflation spike is a strong real example to quote for cost-push.",
          modelAnswer: {
            command: "Explain",
            question:
              "explain, with reference to a recent example, what is meant by cost-push inflation (4 marks)",
            marks: 4,
            points: [
              "Cost-push inflation happens when the costs of production for firms rise, causing them to raise their prices in order to protect their profit margins.",
              "A recent example is the sharp rise in UK inflation during 2022, which was driven mainly by a global spike in wholesale energy and food prices following Russia's invasion of Ukraine.",
              "As firms across many industries faced higher costs for gas, electricity and transport, they passed these higher costs on to consumers through higher prices, causing the general price level to rise sharply.",
              "This is different from demand-pull inflation, where prices rise because total spending in the economy grows faster than the economy's ability to produce more output — the 2022 spike was driven by rising costs, not excess demand.",
            ],
          },
        },
        {
          slug: "distribution-of-income-and-wealth",
          code: "3.4",
          title: "Distribution of Income and Wealth",
          summary:
            "The difference between income and wealth, why they are distributed unequally, and policies used to address this.",
          sections: [
            {
              heading: "Income vs. wealth",
              body: [
                "Income is a flow of money earned over a period of time (e.g. wages earned per year). Wealth is a stock of assets owned at a point in time (e.g. property, savings, shares). It is possible to have high income but low wealth (a well-paid young professional with no savings yet), or high wealth but low current income (a retired homeowner living off savings).",
              ],
            },
            {
              heading: "Causes of inequality",
              body: [
                "Income and wealth inequality arise from differences in wages between occupations (see 2.6), differences in the ownership of assets that generate income (e.g. rental property, shares), inheritance, and differences in education and opportunity.",
              ],
            },
            {
              heading: "Government policy",
              body: [
                "Governments can reduce inequality through progressive taxation (where the proportion of income paid in tax rises as income rises — UK Income Tax works this way, with higher earners paying a higher marginal rate), and through transfer payments such as benefits, pensions and tax credits, which redistribute income from taxpayers to those in greater need.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Illustrative share of total income held by each fifth of households",
            yLabel: "Share of total income (%)",
            bars: [
              { label: "Bottom 20%", value: 8 },
              { label: "2nd 20%", value: 13 },
              { label: "Middle 20%", value: 17 },
              { label: "4th 20%", value: 22 },
              { label: "Top 20%", value: 40, highlight: true },
            ],
            note: "Illustrative example of the shape of income inequality (a stylised version of a real pattern), not exact official statistics — used to show that the top fifth of households typically holds a much larger income share than the bottom fifth.",
          },
          keyTerms: [
            { term: "Income", definition: "A flow of money earned over a period of time." },
            { term: "Wealth", definition: "A stock of assets owned at a point in time." },
            { term: "Progressive tax", definition: "A tax where the proportion of income paid rises as income rises." },
          ],
          examTip:
            "Income and wealth get mixed up constantly in exam answers — before writing, check whether the question's example is a flow (earned regularly, e.g. a salary) or a stock (owned at one point in time, e.g. a house or a share portfolio).",
          modelAnswer: {
            command: "Evaluate",
            question:
              "evaluate the effectiveness of progressive taxation as a way to reduce income inequality (9 marks)",
            marks: 9,
            points: [
              "Progressive taxation, where the proportion of income paid in tax rises as income rises, directly reduces the gap between high and low earners' after-tax (disposable) income, since higher earners lose a larger share of each additional pound earned.",
              "The revenue raised can also be used to fund transfer payments — benefits, tax credits and pensions — which further boosts the disposable income of lower earners, reinforcing the redistributive effect.",
              "However, very high tax rates on high earners can reduce the incentive to work extra hours, take promotions, or start a business, potentially slowing economic growth and, in extreme cases, reducing total tax revenue if high earners relocate or reduce their effort.",
              "Progressive taxation only addresses income inequality directly — wealth inequality (property, shares, inheritance) is often more unequally distributed than income and is not directly reduced unless the tax system also targets wealth (e.g. inheritance tax, capital gains tax).",
              "The effectiveness also depends on how the extra revenue is spent: if it funds effective public services, education and training for lower-income groups, it can improve long-term earning potential, not just short-term income; if spent poorly, the redistributive benefit is weaker.",
              "Overall, progressive taxation is a reasonably effective and widely used tool for reducing income (not wealth) inequality, but its effectiveness depends on the balance between tax rates being high enough to redistribute meaningfully and low enough not to significantly harm work incentives and growth.",
            ],
          },
        },
        {
          slug: "fiscal-policy",
          code: "3.5",
          title: "Fiscal Policy",
          summary:
            "How government spending and taxation are used to influence the economy.",
          sections: [
            {
              heading: "What fiscal policy is",
              body: [
                "Fiscal policy is the use of government spending and taxation to influence the level of economic activity. It is decided by the government (via the Chancellor's Budget in the UK), unlike monetary policy which is set independently by the Bank of England.",
              ],
            },
            {
              heading: "Expansionary and contractionary fiscal policy",
              body: [
                "Expansionary fiscal policy — increasing government spending and/or cutting taxes — is used to boost aggregate demand, typically during a downturn, to increase growth and reduce unemployment. It risks causing a budget deficit and higher inflation if overused — this is the policy used heavily by the UK government during the 2020 pandemic to support businesses and households.",
                "Contractionary (deflationary) fiscal policy — cutting government spending and/or raising taxes — is used to reduce aggregate demand, typically to control inflation or reduce a budget deficit.",
              ],
            },
            {
              heading: "The budget and national debt",
              body: [
                "A budget deficit occurs when government spending exceeds tax revenue in a year; a budget surplus occurs when tax revenue exceeds spending. The national debt is the total accumulated stock of past borrowing that has not yet been repaid — it rose sharply in the UK after 2020 due to pandemic-related spending.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Expansionary fiscal policy: higher government spending shifts AD right",
            xLabel: "Real GDP (output)",
            yLabel: "Price level",
            curves: [
              {
                id: "ad1",
                points: [
                  [2, 94],
                  [26, 62],
                  [50, 32],
                  [74, 6],
                ],
                color: "navy",
                label: "AD1",
                labelPos: "end",
              },
              {
                id: "ad2",
                points: [
                  [22, 96],
                  [46, 64],
                  [70, 34],
                  [94, 8],
                ],
                color: "gold-dashed",
                label: "AD2",
                labelPos: "end",
              },
            ],
            shift: {
              fromCurveId: "ad1",
              toCurveId: "ad2",
              label: "Higher government spending / lower taxes",
            },
            note: "Government spending is a direct component of aggregate demand, so a rise in it (or a tax cut boosting consumer spending) shifts the whole AD curve to the right, raising both real output and the price level.",
          },
          keyTerms: [
            { term: "Fiscal policy", definition: "The use of government spending and taxation to influence the economy." },
            { term: "Budget deficit", definition: "When government spending exceeds tax revenue in a given year." },
            { term: "National debt", definition: "The total accumulated stock of government borrowing not yet repaid." },
          ],
          examTip:
            "Keep fiscal policy (government spending/tax, decided by government) and monetary policy (interest rates/money supply, decided by the Bank of England) in two clearly separate mental boxes — this distinction is examined directly and often, and confusing which institution controls which tool is a very common lost mark.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse how an increase in government spending on infrastructure could affect economic growth (6 marks)",
            marks: 6,
            points: [
              "Government spending is a direct component of aggregate demand (AD = C + I + G + X − M), so an increase in infrastructure spending directly raises AD.",
              "On an AD/AS diagram, this is shown as a rightward shift of the AD curve, which — with aggregate supply unchanged in the short run — raises both real output (short-run economic growth) and the price level.",
              "There is also likely to be a multiplier effect: workers employed on infrastructure projects earn wages, which they then spend elsewhere in the economy, generating further rounds of spending and income beyond the initial government spend.",
              "In the longer run, well-targeted infrastructure spending (e.g. better transport links, digital networks) can also raise the economy's productive capacity itself, shifting aggregate supply to the right and enabling longer-run, non-inflationary growth (see 3.1 and 3.7).",
              "This benefit depends on the spending being efficient and productive — infrastructure spending on projects with poor value for money would raise short-run demand and the deficit without delivering the same long-run supply-side benefit.",
            ],
          },
        },
        {
          slug: "monetary-policy",
          code: "3.6",
          title: "Monetary Policy",
          summary:
            "How the Bank of England uses interest rates and the money supply to influence the economy.",
          sections: [
            {
              heading: "Interest rates",
              body: [
                "Monetary policy is the use of interest rates (and the money supply) to influence the economy, set in the UK by the Bank of England's Monetary Policy Committee (MPC), independently of government, which meets roughly every six weeks to decide the Bank Rate.",
                "Cutting the base interest rate makes borrowing cheaper and saving less attractive, encouraging consumer spending and business investment — this boosts aggregate demand and is used to raise growth or fight low inflation/deflation.",
                "Raising the base interest rate makes borrowing more expensive and saving more attractive, discouraging spending and investment — this reduces aggregate demand and is used to control inflation that is above target, which is why the Bank raised rates sharply from near-zero to 5.25% between 2022 and 2023 in response to high inflation.",
              ],
            },
            {
              heading: "Exchange rate effects",
              body: [
                "Interest rate changes also affect the exchange rate: higher UK interest rates tend to attract foreign investment seeking a better return, increasing demand for pounds and causing the pound to appreciate (see 4.3).",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "A rate cut boosts aggregate demand",
            xLabel: "Real GDP (output)",
            yLabel: "Price level",
            curves: [
              {
                id: "ad1",
                points: [
                  [2, 94],
                  [26, 62],
                  [50, 32],
                  [74, 6],
                ],
                color: "navy",
                label: "AD1",
                labelPos: "end",
              },
              {
                id: "ad2",
                points: [
                  [18, 96],
                  [42, 64],
                  [66, 34],
                  [90, 8],
                ],
                color: "gold-dashed",
                label: "AD2",
                labelPos: "end",
              },
            ],
            shift: {
              fromCurveId: "ad1",
              toCurveId: "ad2",
              label: "Interest rate cut → more borrowing/spending",
            },
            note: "A cut in the Bank Rate encourages borrowing and spending by consumers and firms, shifting AD to the right — the same diagram shape as expansionary fiscal policy, but driven by monetary policy instead.",
          },
          keyTerms: [
            { term: "Monetary policy", definition: "The use of interest rates and money supply to influence the economy, set by the Bank of England." },
            { term: "Base interest rate (Bank Rate)", definition: "The interest rate set by the Bank of England that influences all other rates in the economy." },
          ],
          examTip:
            "When explaining an interest rate change, trace the full chain: rate change → effect on borrowing/saving → effect on consumer spending and business investment → effect on aggregate demand → effect on growth/inflation. Each link is a mark — don't skip straight from 'rates rise' to 'inflation falls'.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse how a rise in the Bank of England's base interest rate could help reduce inflation (6 marks)",
            marks: 6,
            points: [
              "A rise in the base interest rate raises the cost of borrowing for consumers and firms, since commercial banks' own borrowing and lending rates move in line with it.",
              "This discourages consumers from borrowing to fund spending (for example, on credit cards or mortgages) and encourages saving instead, since savings now earn a better return.",
              "Firms also face higher borrowing costs, making them less likely to take out loans to fund investment in new capacity or expansion.",
              "The combined fall in consumer spending and business investment reduces aggregate demand, shown as a leftward shift (or a slower rightward shift) of the AD curve.",
              "With aggregate supply unchanged, lower aggregate demand reduces the upward pressure on the general price level, helping to bring demand-pull inflation back down toward the Bank's 2% target.",
              "This effect takes time to work through the economy — often cited as 18 months to 2 years — which is why the Bank of England has to act on forecasts of future inflation, not just the current rate.",
            ],
          },
        },
        {
          slug: "supply-side-policies",
          code: "3.7",
          title: "Supply-Side Policies",
          summary:
            "Policies aimed at increasing the economy's productive potential rather than just managing demand.",
          sections: [
            {
              heading: "What supply-side policy is",
              body: [
                "Supply-side policies aim to increase the economy's productive capacity and efficiency, shifting the PPF outward (see 1.4) and the aggregate supply curve to the right, rather than managing the level of demand as fiscal and monetary policy do.",
              ],
            },
            {
              heading: "Examples",
              body: [
                "Education and training spending improves the skills and productivity of the workforce. Infrastructure investment (transport, digital networks — such as the UK's rollout of full-fibre broadband) lowers costs for firms. Deregulation removes rules that may be holding back competition and enterprise. Tax incentives for investment encourage firms to expand capacity.",
              ],
            },
            {
              heading: "Benefits and limitations",
              body: [
                "Supply-side policies can raise growth without the inflationary pressure that demand-side stimulus can cause, since they increase the economy's capacity rather than just demand within existing capacity.",
                "Their main limitation is time: most supply-side policies (like improving education, which can take a generation to fully feed through into the workforce) take years to have an effect, so they cannot solve a short-term downturn the way fiscal or monetary policy can.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Supply-side policy shifts aggregate supply right",
            xLabel: "Real GDP (output)",
            yLabel: "Price level",
            curves: [
              {
                id: "ad",
                points: [
                  [6, 88],
                  [32, 58],
                  [60, 32],
                  [88, 10],
                ],
                color: "muted",
                label: "AD",
                labelPos: "end",
              },
              {
                id: "as1",
                points: [
                  [30, 4],
                  [34, 40],
                  [38, 96],
                ],
                color: "navy",
                label: "AS1",
                labelPos: "start",
              },
              {
                id: "as2",
                points: [
                  [50, 4],
                  [54, 40],
                  [58, 96],
                ],
                color: "gold-dashed",
                label: "AS2",
                labelPos: "start",
              },
            ],
            shift: {
              fromCurveId: "as1",
              toCurveId: "as2",
              label: "Better education, infrastructure, deregulation",
            },
            note: "Unlike fiscal/monetary policy, which shift AD, supply-side policy targets AS directly — allowing more real output at a lower price level than demand-side stimulus alone could achieve.",
          },
          keyTerms: [
            { term: "Supply-side policy", definition: "Government policy aimed at increasing an economy's productive capacity." },
            { term: "Deregulation", definition: "Removing rules and restrictions that limit competition or business activity." },
          ],
          examTip:
            "If a question asks for a policy with a long-term effect on the productive capacity of the economy, supply-side policy is almost always the correct category — fiscal and monetary policy are demand-side and act faster but don't raise the economy's ceiling. Always be ready to explain why supply-side policy is slower to work than the other two.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss whether supply-side policy is more effective than fiscal policy at increasing long-term economic growth (8 marks)",
            marks: 8,
            points: [
              "Supply-side policy — such as spending on education, training and infrastructure — directly targets the economy's productive capacity, shifting aggregate supply to the right and raising the ceiling on how much the economy can produce.",
              "This means supply-side policy can raise long-run output without the same inflationary risk as demand-side stimulus, since it increases what the economy can supply, not just what is being demanded within existing capacity.",
              "Fiscal policy, by contrast, mainly shifts aggregate demand, which can raise short-run growth quickly but risks demand-pull inflation if the economy is already near full capacity, and does not by itself raise the economy's long-run potential.",
              "However, supply-side policy is much slower to take effect — improving the skills of the workforce through education can take a decade or more to fully feed through, whereas fiscal policy (e.g. a tax cut) can boost spending within months.",
              "Fiscal policy can also indirectly support long-run growth if targeted at productive infrastructure spending (see 3.5), meaning the two are not always separate — a Budget can combine demand-side stimulus with supply-side investment.",
              "Overall, supply-side policy is likely more effective for sustainable, long-term growth, but fiscal policy remains necessary for managing shorter-term fluctuations in demand — a well-designed government strategy typically uses both together rather than choosing one over the other.",
            ],
          },
        },
        {
          slug: "market-failure-and-government-intervention",
          code: "3.8",
          title: "Government Intervention and Market Failure",
          summary:
            "Why free markets sometimes fail to allocate resources efficiently, and how government intervenes to correct this.",
          sections: [
            {
              heading: "Market failure",
              body: [
                "Market failure occurs when the free market, left alone, fails to allocate resources efficiently, leading to a misallocation of resources from society's point of view.",
                "Externalities are a key cause: costs or benefits of an economic activity that affect a third party not involved in the transaction. A negative externality (e.g. air pollution from a factory, or traffic congestion) means the free market produces too much of the good, because the firm doesn't pay for the harm it causes others — the private cost to the firm is lower than the true cost to society. A positive externality (e.g. education, vaccination) means the free market produces too little, because the individual doesn't capture the full benefit to society.",
                "Merit goods (e.g. education, healthcare) tend to be under-consumed if left purely to the market, because individuals underestimate the benefit to themselves and others. Demerit goods (e.g. tobacco, alcohol, sugary drinks) tend to be over-consumed, because individuals underestimate the harm — the UK's Soft Drinks Industry Levy ('sugar tax'), introduced in 2018, is a real example of government intervention targeting a demerit-good-style externality.",
              ],
            },
            {
              heading: "Government intervention",
              body: [
                "Governments can intervene in several ways: taxes on goods with negative externalities/demerit goods to raise their price and reduce consumption; subsidies for goods with positive externalities/merit goods to lower their price and increase consumption; regulation (laws and standards, e.g. pollution limits, smoking bans in public places); direct provision of goods (e.g. state education, the NHS); and information campaigns to correct consumers' underestimation of costs or benefits (e.g. anti-smoking health warnings).",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "A negative externality: private cost vs. social cost",
            xLabel: "Quantity",
            yLabel: "Cost / Price",
            curves: [
              {
                id: "demand",
                points: [
                  [4, 92],
                  [30, 62],
                  [58, 34],
                  [86, 8],
                ],
                color: "muted",
                label: "Demand",
                labelPos: "end",
              },
              {
                id: "mpc",
                points: [
                  [10, 10],
                  [36, 38],
                  [64, 66],
                  [90, 94],
                ],
                color: "navy",
                label: "Private cost (firm)",
                labelPos: "end",
              },
              {
                id: "msc",
                points: [
                  [4, 30],
                  [28, 54],
                  [52, 80],
                  [72, 100],
                ],
                color: "gold-dashed",
                label: "Social cost (incl. pollution)",
                labelPos: "end",
              },
            ],
            equilibrium: { x: 64, y: 62, label: "Market quantity" },
            note: "The firm only pays its own private cost, so the market produces at the higher 'market quantity'. The true social cost (including pollution) is higher, meaning the socially optimal quantity is actually lower than the free market provides — this gap is the market failure.",
          },
          keyTerms: [
            { term: "Market failure", definition: "When the free market fails to allocate resources efficiently." },
            { term: "Externality", definition: "A cost or benefit of an economic activity affecting a third party not involved in the transaction." },
            { term: "Merit good", definition: "A good that is under-consumed by the free market because its benefits are underestimated." },
            { term: "Demerit good", definition: "A good that is over-consumed by the free market because its harms are underestimated." },
          ],
          examTip:
            "For any market failure question, name the specific externality or good type first (e.g. 'this is a negative externality'), then name the specific government tool used to correct it (e.g. 'a tax') — don't just say 'the government should intervene' without specifying how. Real examples like the UK sugar tax or smoking bans score well as application marks.",
          modelAnswer: {
            command: "Evaluate",
            question:
              "evaluate the use of taxation as a way to correct the market failure caused by a factory's air pollution (9 marks)",
            marks: 9,
            points: [
              "A factory's air pollution is a negative externality: the factory's production imposes a cost on third parties (people breathing polluted air) that the factory itself does not pay for, meaning its private cost of production is lower than the true social cost.",
              "This causes the free market to over-produce relative to the socially optimal quantity, since the factory keeps producing based only on its own (lower) private costs.",
              "A tax on the factory's output (or on the pollution itself) raises its private cost of production closer to the true social cost, shifting its supply curve left and reducing the quantity produced toward the socially optimal level.",
              "The tax also raises government revenue, which could be used to fund clean-up costs or subsidise cleaner alternative technologies, potentially correcting the externality further.",
              "However, setting the 'right' tax rate is difficult in practice: if the tax is too low, pollution is barely reduced; if too high, it may force the factory to close or relocate abroad, costing jobs without necessarily reducing global pollution.",
              "Taxation also does not guarantee the pollution itself falls, only that output falls — regulation (a maximum pollution limit) might more directly guarantee an outcome, though it doesn't raise revenue or leave firms flexibility in how they respond.",
              "Overall, taxation is a reasonably effective and commonly used tool because it works through the price mechanism the firm already responds to, but its success depends on setting an accurate tax rate and considering it alongside other tools like regulation, rather than relying on it alone.",
            ],
          },
        },
      ],
    },
    {
      slug: "international-trade",
      code: "Topic 4",
      title: "International Trade and the Global Economy",
      description:
        "Why countries trade, how the balance of payments is recorded, how exchange rates are determined, and how globalisation is reshaping economies.",
      subtopics: [
        {
          slug: "international-trade",
          code: "4.1",
          title: "International Trade",
          summary:
            "Why countries trade with each other, and the benefits and risks of doing so.",
          sections: [
            {
              heading: "Why countries trade",
              body: [
                "Countries trade because of differences in the resources, climate, skills and technology available to them. Comparative advantage — the idea that a country should specialise in producing goods it can produce relatively more efficiently (at a lower opportunity cost) than other goods, and trade for the rest — explains why trade can make all trading countries better off, even if one country is more efficient at producing everything.",
              ],
            },
            {
              heading: "Benefits and risks",
              body: [
                "Benefits of trade include: access to a wider range of goods than a country could produce alone, lower prices through competition and economies of scale, and higher living standards through specialisation.",
                "Risks include: domestic industries struggling to compete with cheaper imports (potentially causing structural unemployment, see 3.2), and greater exposure to economic shocks in other countries — supply chain disruption during the COVID-19 pandemic showed how reliant many UK firms had become on imported components.",
              ],
            },
            {
              heading: "Trade protectionism",
              body: [
                "Protectionism is when a government restricts imports to protect domestic industries, using tools such as tariffs (taxes on imports), quotas (limits on the quantity of imports), and subsidies for domestic producers. Protectionism can save domestic jobs in the short term but tends to raise prices for consumers and can provoke retaliation from other countries, as seen in various US-China tariff disputes in recent years.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Illustrative UK trade in goods vs. services",
            yLabel: "£ billion (illustrative)",
            bars: [
              { label: "Goods exports", value: 400 },
              { label: "Goods imports", value: 570, highlight: true },
              { label: "Services exports", value: 470, highlight: true },
              { label: "Services imports", value: 300 },
            ],
            note: "Illustrative pattern reflecting a real, well-known feature of the UK economy: a goods trade deficit (importing more goods than it exports) alongside a services trade surplus (exporting more services, e.g. finance and consulting, than it imports).",
          },
          keyTerms: [
            { term: "Comparative advantage", definition: "The ability to produce a good at a lower opportunity cost than another country." },
            { term: "Tariff", definition: "A tax placed on imported goods." },
            { term: "Quota", definition: "A limit on the quantity of a good that can be imported." },
          ],
          examTip:
            "When evaluating protectionism, always weigh the benefit to the protected domestic industry/jobs against the cost to domestic consumers of higher prices and less choice — a one-sided answer rarely reaches top marks.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss whether a government should use tariffs to protect a domestic steel industry from cheaper foreign imports (8 marks)",
            marks: 8,
            points: [
              "A tariff raises the price of imported steel, making domestically produced steel more price-competitive by comparison, which can protect domestic jobs and output in the short term.",
              "This may be justified if the industry is considered strategically important (for example, for national security or defence manufacturing), where relying entirely on foreign supply carries risks beyond pure economic cost.",
              "However, tariffs raise costs for domestic firms that use steel as an input (such as construction and car manufacturing), potentially making those industries less competitive and raising prices for consumers of their products.",
              "Tariffs also risk retaliation: if the exporting country responds with its own tariffs on the protecting country's exports, both countries' consumers and producers can end up worse off.",
              "In the long run, protection can reduce the domestic industry's incentive to innovate and cut costs, since it faces less competitive pressure from efficient foreign producers — this can leave the industry permanently less productive.",
              "Overall, a tariff may be justified as a short-term, targeted measure for a strategically important industry facing a temporary shock, but a long-term, broad tariff policy is likely to cost consumers and downstream industries more than it saves in protected jobs.",
            ],
          },
        },
        {
          slug: "balance-of-payments",
          code: "4.2",
          title: "Balance of Payments",
          summary:
            "How a country records its financial transactions with the rest of the world.",
          sections: [
            {
              heading: "The current account",
              body: [
                "The balance of payments is a record of all financial transactions between a country and the rest of the world over a period of time. The part most relevant at GCSE is the current account, which mainly records trade in goods and services.",
                "A current account deficit occurs when the value of a country's imports (goods and services bought from abroad) exceeds the value of its exports (goods and services sold abroad). A current account surplus occurs when exports exceed imports.",
              ],
            },
            {
              heading: "Causes and significance",
              body: [
                "A current account deficit can be caused by a strong currency (making exports more expensive and imports cheaper), higher domestic incomes relative to other countries (pulling in more imports), or a lack of international competitiveness in domestic industry.",
                "A persistent large deficit can be a concern if it reflects a fundamental lack of competitiveness, though a deficit funded by attracting foreign investment is generally less concerning than one funded by unsustainable borrowing. The UK has run a current account deficit for most of the last few decades, financed partly by strong inflows of foreign investment into UK assets.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Illustrative UK current account balance by component",
            yLabel: "£ billion (illustrative, negative = deficit)",
            bars: [
              { label: "Goods balance", value: -170 },
              { label: "Services balance", value: 140 },
              { label: "Income balance", value: -15 },
              { label: "Overall current account", value: -45, highlight: true },
            ],
            note: "Illustrative pattern showing how a goods deficit and a smaller income deficit can be partly offset by a services surplus, leaving an overall current account deficit — consistent with the UK's real long-run pattern.",
          },
          keyTerms: [
            { term: "Balance of payments", definition: "A record of a country's financial transactions with the rest of the world." },
            { term: "Current account deficit", definition: "When the value of imports exceeds the value of exports." },
            { term: "Current account surplus", definition: "When the value of exports exceeds the value of imports." },
          ],
          examTip:
            "Don't assume a deficit is automatically 'bad' — examiners reward answers that consider what is causing it and how it is being financed, not a blanket judgement. Note that a bar chart like the one above can show negative values below the axis — practise reading these correctly in the exam.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse two possible causes of a persistent UK current account deficit (6 marks)",
            marks: 6,
            points: [
              "One possible cause is a relatively strong pound: a strong exchange rate makes UK exports more expensive for foreign buyers and imports cheaper for UK buyers, which tends to widen the gap between import and export spending.",
              "This is because demand for UK exports falls as they become less price-competitive abroad, while UK consumers are drawn toward now-cheaper imported goods, both effects working in the same direction to worsen the current account.",
              "A second possible cause is relatively high UK consumer demand for goods compared with the UK's ability to produce them domestically, pulling in a high volume of imports — particularly for manufactured goods where the UK has a smaller manufacturing base than some trading partners.",
              "If UK incomes grow faster than the economy's productive capacity in these sectors, spending is drawn toward imports rather than domestic output, widening the goods deficit even as the country continues to run a services surplus.",
            ],
          },
        },
        {
          slug: "exchange-rates",
          code: "4.3",
          title: "Exchange Rates",
          summary:
            "How the value of one currency against another is determined, and how it affects trade.",
          sections: [
            {
              heading: "How exchange rates are determined",
              body: [
                "An exchange rate is the value of one currency expressed in terms of another (e.g. £1 = $1.25). In a floating exchange rate system (which the pound uses), the rate is determined by the demand for and supply of the currency on foreign exchange markets, using the same demand-and-supply logic as any other market.",
                "Demand for a currency increases (causing appreciation) when, for example, foreigners want to buy more of that country's exports, when interest rates rise (attracting investors seeking a better return, see 3.6), or when the country is seen as a safe/attractive place to invest.",
              ],
            },
            {
              heading: "Appreciation and depreciation",
              body: [
                "Appreciation is a rise in the value of a currency against other currencies. It makes exports more expensive for foreign buyers (potentially reducing export sales) and imports cheaper for domestic buyers (potentially increasing imports) — this can worsen a current account position.",
                "Depreciation is a fall in the value of a currency. It makes exports cheaper for foreign buyers (potentially boosting export sales) and imports more expensive for domestic buyers — this can improve a current account position, but also raises the price of imported goods, contributing to cost-push inflation. The pound fell sharply against the dollar following the 2016 EU referendum result, a real example of rapid currency depreciation driven by changed investor expectations.",
              ],
            },
          ],
          diagram: {
            kind: "curves",
            title: "Demand and supply of the pound: a rise in UK interest rates",
            xLabel: "Quantity of pounds traded",
            yLabel: "Exchange rate (£ in $)",
            curves: [
              {
                id: "d1",
                points: [
                  [4, 92],
                  [30, 62],
                  [58, 34],
                  [86, 8],
                ],
                color: "muted",
                label: "Demand for £",
                labelPos: "end",
              },
              {
                id: "d2",
                points: [
                  [16, 96],
                  [42, 66],
                  [70, 38],
                  [96, 10],
                ],
                color: "gold-dashed",
                label: "Demand for £ (after rate rise)",
                labelPos: "end",
              },
              {
                id: "supply",
                points: [
                  [10, 6],
                  [36, 34],
                  [64, 62],
                  [90, 92],
                ],
                color: "navy",
                label: "Supply of £",
                labelPos: "end",
              },
            ],
            shift: {
              fromCurveId: "d1",
              toCurveId: "d2",
              label: "Higher UK interest rates attract investors",
            },
            note: "Higher UK interest rates attract foreign investors seeking a better return, raising demand for pounds and causing the pound to appreciate against other currencies.",
          },
          keyTerms: [
            { term: "Exchange rate", definition: "The value of one currency expressed in terms of another." },
            { term: "Appreciation", definition: "A rise in the value of a currency against other currencies." },
            { term: "Depreciation", definition: "A fall in the value of a currency against other currencies." },
          ],
          examTip:
            "A strong pound is good for consumers buying imports but bad for exporters — always specify which group (consumers, exporters, importers) you're referring to rather than saying an exchange rate change is simply 'good' or 'bad' for 'the economy'.",
          modelAnswer: {
            command: "Analyse",
            question:
              "analyse the likely effect of a fall in the value of the pound on UK exporters (6 marks)",
            marks: 6,
            points: [
              "A fall in the value of the pound (depreciation) means each pound buys less foreign currency than before.",
              "For a foreign buyer, this makes UK exports effectively cheaper in their own currency, even though the exporter's price in pounds has not changed.",
              "This is likely to increase the quantity of UK exports demanded, since UK goods and services become more price-competitive in foreign markets.",
              "If demand for UK exports is price elastic (responsive to the price change), total export revenue is likely to rise, since the percentage rise in quantity sold outweighs the percentage fall in the effective price.",
              "However, exporters that rely on imported raw materials or components will face higher costs from the same depreciation, since imports become more expensive — this could partly offset the competitiveness benefit if input costs rise significantly.",
              "Overall, a weaker pound tends to benefit UK exporters' competitiveness, but the size of the benefit depends on the price elasticity of demand for their exports and how import-dependent their own production is.",
            ],
          },
        },
        {
          slug: "globalisation",
          code: "4.4",
          title: "Globalisation",
          summary:
            "The growing interconnection of the world's economies, and its effects on countries, firms and workers.",
          sections: [
            {
              heading: "What globalisation is",
              body: [
                "Globalisation is the increasing economic interdependence and integration of countries around the world, driven by falling transport and communication costs, reduced trade barriers, the growth of multinational companies, and improvements in technology such as the internet and container shipping.",
              ],
            },
            {
              heading: "Multinational companies",
              body: [
                "A multinational company (MNC) operates in more than one country. MNCs can bring benefits to a host country, including jobs, investment, new technology and skills, and increased tax revenue — many global technology and car manufacturing firms operate factories or offices across dozens of countries, including the UK. Potential drawbacks include profits being sent back to the home country rather than reinvested locally, and MNCs having significant bargaining power over local governments and workers.",
              ],
            },
            {
              heading: "Winners and losers",
              body: [
                "Globalisation can raise living standards overall through greater trade, investment and choice, but the gains are not shared equally. Some workers and industries in developed countries have faced job losses as production has shifted to countries with lower labour costs (for example, much of the UK's textile manufacturing moved overseas from the 1970s onward), while workers in some developing countries have gained new employment opportunities as manufacturing has expanded there.",
              ],
            },
          ],
          diagram: {
            kind: "line",
            title: "World trade as a share of global GDP, illustrative long-run trend",
            yLabel: "World trade (% of world GDP)",
            points: [
              { label: "1970", value: 25 },
              { label: "1990", value: 38 },
              { label: "2008", value: 61 },
              { label: "2015", value: 55 },
              { label: "2024", value: 58 },
            ],
            note: "Illustrative long-run pattern: world trade grew rapidly as a share of global output from the 1970s to the 2008 financial crisis, then plateaued — a widely cited proxy for the pace of globalisation over time.",
          },
          keyTerms: [
            { term: "Globalisation", definition: "The increasing economic interdependence and integration of countries." },
            { term: "Multinational company (MNC)", definition: "A company that operates and produces in more than one country." },
          ],
          examTip:
            "Globalisation essay questions reward a balanced answer that identifies specific winners and specific losers (e.g. 'consumers gain from lower prices, but domestic manufacturing workers may lose jobs to lower-cost countries') rather than a single overall verdict.",
          modelAnswer: {
            command: "Discuss",
            question:
              "discuss the impact of globalisation on workers in developed economies like the UK (8 marks)",
            marks: 8,
            points: [
              "Globalisation has allowed firms to relocate production to countries with lower labour costs, which has reduced demand for certain types of labour in developed economies, particularly in manufacturing.",
              "For UK workers whose skills were tied to industries that moved overseas (such as much of textile manufacturing), this has contributed to structural unemployment, requiring retraining to move into other sectors.",
              "At the same time, globalisation has created new opportunities in developed economies in sectors like finance, technology, design and other high-skilled services, where the UK holds a comparative advantage internationally.",
              "Consumers in developed economies have also benefited from globalisation through access to a wider range of goods at lower prices, as firms source inputs and finished products from the most cost-effective locations worldwide.",
              "The overall effect is therefore uneven: higher-skilled workers and consumers have generally gained, while lower-skilled workers in globally exposed industries have often lost out, at least in the short to medium term before retraining or relocation into new sectors.",
              "Government supply-side policy (see 3.7), such as retraining schemes and education spending, plays an important role in helping workers adapt to these shifts, meaning the ultimate impact on workers also depends on how well governments manage the transition.",
            ],
          },
        },
      ],
    },
    {
      slug: "quantitative-skills",
      code: "Exam skills",
      title: "Quantitative Skills",
      description:
        "Not a separate OCR topic in its own right — these are the calculation and data-interpretation skills examined throughout both J205/01 and J205/02, wherever a question gives you a table, a graph, or asks you to calculate a value. Worth revising as its own toolkit, since these questions come up on almost every paper.",
      subtopics: [
        {
          slug: "percentages-and-percentage-change",
          code: "Q1",
          title: "Calculating Percentages and Percentage Change",
          summary:
            "The two calculation skills that come up most often in OCR Economics data-response questions.",
          sections: [
            {
              heading: "Calculating a percentage",
              body: [
                "To express one value as a percentage of another: (part ÷ whole) × 100. For example, if a household spends £280 of its £1,400 monthly income on food, food takes up (280 ÷ 1400) × 100 = 20% of income.",
              ],
            },
            {
              heading: "Calculating percentage change",
              body: [
                "Percentage change measures how much a value has grown or shrunk, relative to its starting point: ((new value − old value) ÷ old value) × 100. The result is positive for an increase and negative for a decrease.",
                "Worked example: if the price of a weekly shop rises from £80 to £92, the percentage change is ((92 − 80) ÷ 80) × 100 = (12 ÷ 80) × 100 = 15%. This is exactly the calculation behind how CPI inflation (see 3.3) is worked out for a single item — the real CPI figure just averages this calculation across a whole basket of goods, weighted by how much people typically spend on each item.",
                "A common error is dividing by the new value instead of the old value — always divide the change by the original (starting) figure, not the final one.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Worked example: weekly shop price, before and after",
            yLabel: "Price (£)",
            bars: [
              { label: "Before", value: 80 },
              { label: "After", value: 92, highlight: true },
            ],
            note: "Percentage change = ((92 − 80) ÷ 80) × 100 = 15%. Always divide by the 'before' (original) value, never the 'after' value.",
          },
          keyTerms: [
            { term: "Percentage change", definition: "((new value − old value) ÷ old value) × 100 — how much a value has grown or shrunk relative to its starting point." },
          ],
          examTip:
            "Show your working line by line in the exam, even for a 'calculate' question worth only 2-3 marks — method marks are usually available even if your final answer is wrong, but only if the examiner can see the correct formula being applied.",
          modelAnswer: {
            command: "Calculate",
            question:
              "a firm's monthly revenue rises from £45,000 to £51,750. Calculate the percentage change in revenue, showing your working (3 marks)",
            marks: 3,
            points: [
              "Percentage change = ((new value − old value) ÷ old value) × 100.",
              "Substituting the values: ((51,750 − 45,000) ÷ 45,000) × 100 = (6,750 ÷ 45,000) × 100.",
              "6,750 ÷ 45,000 = 0.15, so the percentage change = 0.15 × 100 = 15%. The firm's monthly revenue rose by 15%.",
            ],
          },
        },
        {
          slug: "index-numbers",
          code: "Q2",
          title: "Index Numbers",
          summary:
            "How economists convert raw data into a single comparable scale, using a base year set at 100.",
          sections: [
            {
              heading: "What an index number is",
              body: [
                "An index number converts a series of raw figures (prices, output, wages) into a single comparable scale, by setting one period — the base year — equal to 100 and expressing every other period relative to it.",
                "The formula for any given year's index value is: (value in that year ÷ value in the base year) × 100.",
              ],
            },
            {
              heading: "Why index numbers matter in this course",
              body: [
                "The Consumer Prices Index (CPI, see 3.3) is the most important index number in the whole course: it is set to 100 in a chosen base period, and its rise over time is exactly how UK inflation is measured and reported.",
                "Reading an index number correctly: a value of 108 means the figure has risen 8% since the base year; a value of 95 means it has fallen 5% since the base year. The percentage change between any two years on an index can be calculated using the same percentage change formula as in Q1.",
              ],
            },
          ],
          diagram: {
            kind: "line",
            title: "Worked example: a price index, base year = 100",
            yLabel: "Price index (base year = 100)",
            points: [
              { label: "Year 1 (base)", value: 100 },
              { label: "Year 2", value: 104 },
              { label: "Year 3", value: 111 },
              { label: "Year 4", value: 109 },
            ],
            note: "Year 3's index value of 111 means prices were 11% higher than in the base year. The fall from Year 3 to Year 4 (111 to 109) shows prices fell slightly, but were still 9% above the base year.",
          },
          keyTerms: [
            { term: "Index number", definition: "A figure expressing a value relative to a base year, which is set equal to 100." },
            { term: "Base year", definition: "The reference year in an index, always given the value 100." },
          ],
          examTip:
            "If a price index falls from one year to the next (e.g. 111 to 109 above), that does not mean prices fell overall since the base year — it means inflation was still positive in earlier years, just that this particular year saw a small fall. Read every index value as 'X% above/below the base year', not just compare it to the year before.",
          modelAnswer: {
            command: "Calculate",
            question:
              "a price index has a base year (Year 1) value of 100. In Year 2, the index value is 106. Calculate the percentage change in prices between Year 1 and Year 2, and explain what the Year 2 figure means (3 marks)",
            marks: 3,
            points: [
              "Because the base year is always set to 100, an index value of 106 in Year 2 directly represents a rise of 6 index points from the base year.",
              "Since the base year itself equals 100, this 6-point rise is the same as a 6% increase — using the percentage change formula: ((106 − 100) ÷ 100) × 100 = 6%.",
              "This means prices in Year 2 were 6% higher than in Year 1 (the base year) — this is exactly how a CPI inflation figure of '6%' would be reported and interpreted in the real economy.",
            ],
          },
        },
        {
          slug: "interpreting-data",
          code: "Q3",
          title: "Interpreting Tables and Graphs",
          summary:
            "How to read, describe and calculate from the data extracts that appear throughout OCR's exam papers.",
          sections: [
            {
              heading: "Reading data accurately",
              body: [
                "OCR Economics papers frequently include a table or graph and ask you to identify a trend, read off a specific value, or use the data to support an answer elsewhere on the paper.",
                "Always check the axis labels and units before answering — a graph showing 'unemployment rate (%)' is a very different thing from one showing 'number of people unemployed (thousands)', and mixing the two up is a common error.",
              ],
            },
            {
              heading: "Describing a trend",
              body: [
                "When asked to describe a trend, use precise language: 'rose', 'fell', 'fluctuated', 'remained broadly stable', and quote actual figures from the data rather than vague description — 'unemployment rose from 3.7% in 2022 to 4.4% in 2024' scores more marks than 'unemployment went up'.",
                "Be careful with correlation: two variables moving together in a data extract (e.g. rising interest rates and falling inflation) does not by itself prove one caused the other — a strong answer states the likely economic mechanism linking them, not just that they moved together.",
              ],
            },
          ],
          diagram: {
            kind: "bar",
            title: "Worked example: reading a bar chart accurately",
            yLabel: "Unemployment rate (%)",
            bars: [
              { label: "2021", value: 4.5 },
              { label: "2022", value: 3.7 },
              { label: "2023", value: 4.2 },
              { label: "2024", value: 4.4, highlight: true },
            ],
            note: "A strong answer reads off exact values (e.g. 'the rate fell from 4.5% in 2021 to 3.7% in 2022, then rose to 4.4% by 2024') rather than a vague description like 'unemployment changed over time'.",
          },
          keyTerms: [
            { term: "Trend", definition: "The general direction a data series moves in over time." },
            { term: "Correlation", definition: "Two variables moving together — not, by itself, proof that one causes the other." },
          ],
          examTip:
            "When a question says 'using the data', you must quote at least one actual figure from the table or graph in your answer — an otherwise excellent answer that never references the data extract will lose the specific 'application' marks reserved for using it.",
          modelAnswer: {
            command: "Analyse",
            question:
              "using the data in the bar chart above, analyse the trend in the UK unemployment rate between 2021 and 2024 (4 marks)",
            marks: 4,
            points: [
              "The data shows the UK unemployment rate fell from 4.5% in 2021 to 3.7% in 2022, a fall of 0.8 percentage points, before rising again to 4.2% in 2023 and 4.4% in 2024.",
              "This pattern suggests the labour market strengthened in the short term after 2021 (possibly as the economy recovered from a prior downturn), before weakening again from 2022 onwards.",
              "The rise after 2022 is consistent with the sharp rise in interest rates over the same period (see 3.6), which would be expected to reduce aggregate demand and, with a lag, raise cyclical unemployment.",
              "Overall, the data shows unemployment did not follow a single consistent direction across the period, falling initially before trending upward again by 2024.",
            ],
          },
        },
      ],
    },
  ],
};

export const SUBJECTS: Subject[] = [ECONOMICS];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getTopic(subjectSlug: string, topicSlug: string) {
  const subject = getSubject(subjectSlug);
  const topic = subject?.topics.find((t) => t.slug === topicSlug);
  return { subject, topic };
}

export function getSubtopic(subjectSlug: string, topicSlug: string, subtopicSlug: string) {
  const { subject, topic } = getTopic(subjectSlug, topicSlug);
  const subtopic = topic?.subtopics.find((s) => s.slug === subtopicSlug);
  return { subject, topic, subtopic };
}

export function countSubtopics(subject: Subject): number {
  return subject.topics.reduce((sum, t) => sum + t.subtopics.length, 0);
}
