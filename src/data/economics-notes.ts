import type { Subject } from "@/types/notes";

export const ECONOMICS: Subject = {
  slug: "economics",
  examBoard: "OCR",
  qualification: "GCSE (9-1) J205",
  title: "Economics",
  tagline: "Clear, exam-focused notes for OCR GCSE Economics",
  description:
    "Notes built directly around the four OCR GCSE Economics topics: Introduction to Economics, The Role of Markets and Money, Economic Objectives and the Role of Government, and International Trade and the Global Economy.",
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
              heading: "Why the distinction matters",
              body: [
                "Exam answers that name the correct factor of production and its correct reward score more marks than vague answers about 'resources'. Always link the factor to its specific reward: land–rent, labour–wages, capital–interest, enterprise–profit.",
                "A common mistake is confusing capital (machinery, factories) with financial capital (money used to start a business). In OCR Economics, 'capital' as a factor of production always means physical/manufactured resources, not cash.",
              ],
            },
          ],
          keyTerms: [
            { term: "Land", definition: "Natural resources used in production; reward is rent." },
            { term: "Labour", definition: "Human physical and mental effort used in production; reward is wages." },
            { term: "Capital", definition: "Manufactured resources used to produce other goods, e.g. machinery; reward is interest." },
            { term: "Enterprise", definition: "The risk-taking that combines the other factors; reward is profit." },
          ],
          examTip:
            "If a question gives you a scenario (e.g. a bakery), practise picking out each factor of production from the text — the flour is a raw material (land), the oven is capital, the baker's effort is labour, and the owner risking their savings is enterprise.",
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
                "For example, if a government spends an extra £1 billion on the NHS, the opportunity cost might be the new schools that money could otherwise have built.",
              ],
            },
            {
              heading: "What, how and for whom",
              body: [
                "Because resources are scarce, every economy has to answer three questions: what to produce, how to produce it (which combination of factors of production to use), and for whom to produce it (who gets to consume the output).",
                "Different economic systems (market, planned, or mixed) answer these three questions in different ways — market economies let price signals decide, planned economies let the government decide, and mixed economies use a combination of both.",
              ],
            },
          ],
          keyTerms: [
            { term: "Scarcity", definition: "The condition where finite resources cannot satisfy unlimited human wants." },
            { term: "Opportunity cost", definition: "The value of the next best alternative given up when making a choice." },
            { term: "Mixed economy", definition: "An economic system combining market forces and government intervention." },
          ],
          examTip:
            "Whenever a question asks you to 'discuss' or 'evaluate' a decision, look for a sentence naming the specific opportunity cost — vague statements like 'there are pros and cons' score far fewer marks than 'the opportunity cost of X is Y'.",
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
              ],
            },
            {
              heading: "Producers (firms)",
              body: [
                "Producers decide what to make and how to make it, generally aiming to maximise profit, though some firms pursue other objectives such as growth, market share, or survival, especially in the short run.",
              ],
            },
            {
              heading: "Government",
              body: [
                "Government decides on tax and spending policy, and on regulation of markets, generally aiming to achieve broader objectives such as economic growth, low unemployment, low and stable inflation, and a fair distribution of income (covered in full in Topic 3).",
              ],
            },
          ],
          keyTerms: [
            { term: "Utility", definition: "The satisfaction a consumer gains from consuming a good or service." },
            { term: "Profit maximisation", definition: "Producing at the output level where the gap between total revenue and total cost is greatest." },
          ],
          examTip:
            "When a question names a specific decision-maker (e.g. 'the government' or 'a firm'), make sure your answer's objective matches that decision-maker — mixing up consumer and producer objectives is a very common lost mark.",
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
                "Any point on the curve itself represents full and efficient use of resources. Any point inside the curve represents unemployed or underused resources (productive inefficiency). Any point outside the curve is currently unattainable.",
              ],
            },
            {
              heading: "Movements and shifts",
              body: [
                "Moving along the curve (e.g. producing more of good A and less of good B) illustrates opportunity cost directly — more of one good can only be produced by giving up some of the other.",
                "A shift of the whole curve outward represents economic growth — an increase in the economy's productive potential, caused by more resources (e.g. a larger workforce) or better technology. A shift inward represents a fall in productive potential, e.g. after a natural disaster.",
              ],
            },
          ],
          keyTerms: [
            { term: "Productive efficiency", definition: "Producing on the PPF, using resources fully with no waste." },
            { term: "Economic growth (PPF)", definition: "An outward shift of the PPF, showing increased productive potential." },
          ],
          examTip:
            "Always state clearly whether a change is a movement along the PPF (a trade-off between two goods with existing resources) or a shift of the PPF (a change in the total resources or technology available) — examiners specifically reward this distinction.",
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
                "A movement along the demand curve is caused only by a change in the price of the good itself.",
              ],
            },
            {
              heading: "Shifts in demand (conditions of demand)",
              body: [
                "A shift of the entire demand curve is caused by a change in a factor other than the good's own price. Key factors include: income (for normal goods, higher income shifts demand right; for inferior goods, higher income shifts demand left), the price of substitutes and complements, tastes and fashion, advertising, population, and expectations of future price changes.",
              ],
            },
            {
              heading: "Elasticity of demand",
              body: [
                "Price elasticity of demand (PED) measures how responsive quantity demanded is to a change in price. Demand is price elastic if PED is greater than 1 (quantity demanded changes proportionally more than price), and price inelastic if PED is less than 1.",
                "Goods with close substitutes, that take up a large share of income, or are luxuries tend to have more elastic demand. Necessities and goods with brand loyalty or addictive qualities tend to have more inelastic demand.",
              ],
            },
          ],
          keyTerms: [
            { term: "Demand", definition: "The quantity of a good consumers are willing and able to buy at a given price." },
            { term: "Normal good", definition: "A good for which demand rises as income rises." },
            { term: "Inferior good", definition: "A good for which demand falls as income rises." },
            { term: "Price elasticity of demand", definition: "The responsiveness of quantity demanded to a change in price." },
          ],
          examTip:
            "Keep 'a change in price' (movement along the curve) and 'a change in any other factor' (shift of the curve) strictly separate in your answers — examiners often penalise diagrams that shift the curve for a price change.",
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
              ],
            },
            {
              heading: "Elasticity of supply",
              body: [
                "Price elasticity of supply (PES) measures how responsive quantity supplied is to a change in price. Supply tends to be more elastic when firms hold spare capacity or stock, and when production can be scaled up quickly; it tends to be more inelastic when production takes a long time or capacity is fixed, as with many agricultural goods in the short run.",
              ],
            },
          ],
          keyTerms: [
            { term: "Supply", definition: "The quantity of a good producers are willing and able to sell at a given price." },
            { term: "Price elasticity of supply", definition: "The responsiveness of quantity supplied to a change in price." },
            { term: "Subsidy", definition: "A payment from government to a producer that lowers the cost of production and shifts supply right." },
          ],
          examTip:
            "A tax on a good shifts supply left (higher cost of production); a subsidy shifts supply right (lower cost of production) — practise drawing both shifts and reading off the new equilibrium price and quantity.",
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
                "If price is set above equilibrium, quantity supplied exceeds quantity demanded, creating excess supply (a surplus), which pushes price back down. If price is below equilibrium, quantity demanded exceeds quantity supplied, creating excess demand (a shortage), which pushes price back up.",
              ],
            },
            {
              heading: "The price mechanism",
              body: [
                "The price mechanism is the process by which changes in price, driven by shifts in demand and supply, allocate scarce resources in a market economy. Rising prices signal to producers that a good is in higher demand relative to supply, giving them an incentive to produce more; falling prices signal the opposite.",
                "This is how a market economy answers 'what, how, and for whom to produce' without central planning — through the independent decisions of buyers and sellers responding to price signals.",
              ],
            },
          ],
          keyTerms: [
            { term: "Equilibrium price", definition: "The price at which quantity demanded equals quantity supplied." },
            { term: "Excess demand", definition: "A shortage; quantity demanded exceeds quantity supplied at the current price." },
            { term: "Excess supply", definition: "A surplus; quantity supplied exceeds quantity demanded at the current price." },
          ],
          examTip:
            "When asked to analyse the effect of an event on a market (e.g. a bad harvest, a new tax, a rise in incomes), work through the chain in order: which curve shifts → which direction → new equilibrium price → new equilibrium quantity. Marks are given for each correct step, not just the final answer.",
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
                "At one extreme, perfect competition describes a market with many small firms selling an identical product, easy entry and exit, and no single firm able to influence the market price — firms are 'price takers'.",
                "At the other extreme, a monopoly exists when a single firm dominates a market, facing little or no competition. A monopolist is a 'price maker' and can restrict output to charge higher prices than would exist under competition.",
              ],
            },
            {
              heading: "Effects of competition",
              body: [
                "Greater competition tends to benefit consumers through lower prices, more choice, and pressure on firms to innovate and improve quality. Less competition (as in a monopoly) tends to allow higher prices, less choice, and less incentive to innovate, though large firms can also achieve economies of scale that lower costs.",
              ],
            },
          ],
          keyTerms: [
            { term: "Monopoly", definition: "A market dominated by a single firm with significant power over price." },
            { term: "Price taker", definition: "A firm that must accept the market price because it has no power to influence it." },
            { term: "Barriers to entry", definition: "Obstacles that make it difficult for new firms to enter a market." },
          ],
          examTip:
            "Use real, well-known examples (a local corner shop for high competition, a national rail operator or utility company for low competition) to anchor evaluation points — examiners reward specific, relevant application over generic theory.",
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
                "The division of labour is a specific form of specialisation where the production process is split into separate tasks, with different workers each focusing on one task.",
              ],
            },
            {
              heading: "Benefits and drawbacks",
              body: [
                "Benefits include higher output per worker (workers become highly skilled at one task), time saved not switching between tasks, and the ability to use specialised machinery.",
                "Drawbacks include monotonous, repetitive work that can lower worker motivation, over-dependence on one skill (making workers vulnerable if that task is automated or the firm closes), and the risk that a single breakdown in the production line halts all output.",
              ],
            },
          ],
          keyTerms: [
            { term: "Specialisation", definition: "Concentrating on producing a narrow range of goods or tasks." },
            { term: "Division of labour", definition: "Splitting a production process into separate, specialised tasks." },
          ],
          examTip:
            "This subtopic is a favourite for 'discuss the advantages and disadvantages' questions — always pair each advantage with a linked disadvantage (e.g. higher output vs. worker demotivation) rather than listing them separately.",
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
                "The supply of labour is influenced by wage rates, the number of qualified workers, working conditions, and non-monetary factors such as job satisfaction.",
              ],
            },
            {
              heading: "Wage determination",
              body: [
                "In a competitive labour market, the equilibrium wage rate is set where the demand for labour equals the supply of labour, using exactly the same logic as demand and supply for goods.",
                "Wages differ between occupations mainly because of differences in the skills required, the level of risk/unpleasantness of the job, and how many people are qualified and willing to do it (i.e. differences in labour supply relative to demand).",
              ],
            },
            {
              heading: "Trade unions",
              body: [
                "Trade unions are organisations that represent workers, negotiating collectively with employers over pay and working conditions. By bargaining as a group rather than individually, unions can secure higher wages or better conditions than individual workers might achieve alone, though critics argue this can also raise costs for firms and reduce employment if wages are pushed above the market equilibrium.",
              ],
            },
          ],
          keyTerms: [
            { term: "Derived demand", definition: "Demand for a resource (like labour) that exists only because of demand for the good it helps produce." },
            { term: "Trade union", definition: "An organisation representing workers in negotiations with employers." },
          ],
          examTip:
            "If asked why one job pays more than another, structure your answer around supply and demand for that specific type of labour, not just 'it's a harder job' — link difficulty of training back to a smaller supply of qualified workers.",
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
                "Commercial banks accept deposits from savers and provide loans to borrowers, earning profit mainly from the difference between interest paid on deposits and interest charged on loans. They also provide payment services such as current accounts and card payments.",
                "The Bank of England is the UK's central bank. It sets the base interest rate (Bank Rate) as part of monetary policy, issues currency, and acts as a regulator and 'lender of last resort' to the banking system to maintain financial stability.",
                "Financial markets (such as the stock market) allow firms to raise finance by selling shares or bonds to investors, and allow savers to invest their money in the hope of a return.",
              ],
            },
          ],
          keyTerms: [
            { term: "Medium of exchange", definition: "An item accepted in payment for goods and services." },
            { term: "Central bank", definition: "The institution (the Bank of England in the UK) responsible for monetary policy and financial stability." },
            { term: "Lender of last resort", definition: "The central bank's role of lending to banks in a crisis to prevent the banking system collapsing." },
          ],
          examTip:
            "If asked to explain a function of money, always give a concrete mini-example for each function (e.g. 'as a store of value, someone can save £50 today and it will still buy roughly £50 of goods in a few months') — bare definitions alone rarely score full marks.",
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
                "The business (trade) cycle describes the pattern of economic growth over time, moving through boom, downturn/recession, slump and recovery.",
              ],
            },
            {
              heading: "Causes of growth",
              body: [
                "Short-run growth can come from using existing spare capacity more fully (e.g. firms increasing output with existing machinery and workers). Long-run growth requires an increase in the economy's productive potential — more or better quality factors of production, and improved technology — shown as an outward shift of the PPF (see 1.4).",
              ],
            },
            {
              heading: "Benefits and costs of growth",
              body: [
                "Benefits include higher average incomes and living standards, more jobs, and higher tax revenue for the government to spend on public services.",
                "Costs can include a wider gap between rich and poor if growth is not evenly shared, environmental damage (pollution, resource depletion), and inflationary pressure if growth happens too fast for the economy to keep up with (demand-pull inflation).",
              ],
            },
          ],
          keyTerms: [
            { term: "GDP", definition: "The total value of goods and services produced in an economy over a period." },
            { term: "Real GDP", definition: "GDP adjusted to remove the effect of inflation." },
            { term: "Business cycle", definition: "The pattern of fluctuation in economic growth: boom, downturn, slump, recovery." },
          ],
          examTip:
            "Distinguish clearly between 'growth' (a positive percentage change in real GDP) and 'a recession' (commonly defined as two consecutive quarters of negative growth) — mixing these up is a frequent error.",
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
                "The unemployment rate is the percentage of the economically active population (those in work or actively seeking work) who are without a job but available for and actively seeking work.",
              ],
            },
            {
              heading: "Types and causes",
              body: [
                "Cyclical (demand-deficient) unemployment is caused by a fall in aggregate demand during a downturn, when firms need fewer workers.",
                "Structural unemployment occurs when the skills of workers no longer match the jobs available, often because of long-term shifts in the economy (e.g. decline of an industry, automation).",
                "Frictional unemployment is short-term, occurring when people are between jobs, e.g. searching for a new role after leaving a previous one.",
                "Seasonal unemployment occurs in industries where demand for labour varies predictably through the year, such as agriculture or tourism.",
              ],
            },
            {
              heading: "Costs of unemployment",
              body: [
                "For individuals: lost income, lower living standards, and potential loss of skills and confidence the longer unemployment lasts.",
                "For the economy: lower output than the economy is capable of (a waste of resources), lower tax revenue, higher government spending on benefits, and potential social costs linked to poverty and inequality.",
              ],
            },
          ],
          keyTerms: [
            { term: "Cyclical unemployment", definition: "Unemployment caused by a fall in aggregate demand during a downturn." },
            { term: "Structural unemployment", definition: "Unemployment caused by a mismatch between workers' skills and available jobs." },
            { term: "Frictional unemployment", definition: "Short-term unemployment while people move between jobs." },
          ],
          examTip:
            "When a case study describes a cause of unemployment, name the correct type first, then explain the mechanism — e.g. 'this is structural unemployment because the workers' skills (coal mining) no longer match the jobs available after the industry declined.'",
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
                "Inflation is a sustained rise in the general price level of an economy over time, measured mainly by the Consumer Prices Index (CPI), which tracks the price of a representative 'basket' of goods and services bought by a typical household.",
                "The UK government sets an inflation target of 2% CPI, which the Bank of England is responsible for meeting through monetary policy.",
              ],
            },
            {
              heading: "Causes of inflation",
              body: [
                "Demand-pull inflation occurs when aggregate demand grows faster than the economy's productive capacity, pulling prices up.",
                "Cost-push inflation occurs when the costs of production rise (e.g. higher wages, higher raw material or energy prices), causing firms to raise prices to protect their profit margins.",
              ],
            },
            {
              heading: "Costs of inflation",
              body: [
                "High or unpredictable inflation erodes the purchasing power of money and savings, particularly harming those on fixed incomes. It creates uncertainty for firms making investment decisions, and can make a country's exports less competitive if prices rise faster than in other countries.",
                "Deflation (a fall in the general price level) is also considered a problem: it can encourage consumers to delay spending in expectation of even lower prices, weakening demand further.",
              ],
            },
          ],
          keyTerms: [
            { term: "Inflation", definition: "A sustained rise in the general price level over time." },
            { term: "CPI", definition: "Consumer Prices Index; the main UK measure of inflation, tracking a basket of goods and services." },
            { term: "Deflation", definition: "A sustained fall in the general price level." },
          ],
          examTip:
            "Always specify which type of inflation a scenario describes (demand-pull or cost-push) — a question about rising oil prices pushing up costs is cost-push, not demand-pull, even though the end result (higher prices) looks the same.",
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
                "Income is a flow of money earned over a period of time (e.g. wages earned per year). Wealth is a stock of assets owned at a point in time (e.g. property, savings, shares). It is possible to have high income but low wealth, or the reverse.",
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
                "Governments can reduce inequality through progressive taxation (where the proportion of income paid in tax rises as income rises), and through transfer payments such as benefits, pensions and tax credits, which redistribute income from taxpayers to those in greater need.",
              ],
            },
          ],
          keyTerms: [
            { term: "Income", definition: "A flow of money earned over a period of time." },
            { term: "Wealth", definition: "A stock of assets owned at a point in time." },
            { term: "Progressive tax", definition: "A tax where the proportion of income paid rises as income rises." },
          ],
          examTip:
            "Income and wealth get mixed up constantly in exam answers — before writing, check whether the question's example is a flow (earned regularly, e.g. a salary) or a stock (owned at one point in time, e.g. a house).",
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
                "Fiscal policy is the use of government spending and taxation to influence the level of economic activity. It is decided by the government (via the Chancellor's Budget in the UK), unlike monetary policy which is set by the Bank of England.",
              ],
            },
            {
              heading: "Expansionary and contractionary fiscal policy",
              body: [
                "Expansionary fiscal policy — increasing government spending and/or cutting taxes — is used to boost aggregate demand, typically during a downturn, to increase growth and reduce unemployment. It risks causing a budget deficit and higher inflation if overused.",
                "Contractionary (deflationary) fiscal policy — cutting government spending and/or raising taxes — is used to reduce aggregate demand, typically to control inflation or reduce a budget deficit.",
              ],
            },
            {
              heading: "The budget and national debt",
              body: [
                "A budget deficit occurs when government spending exceeds tax revenue in a year; a budget surplus occurs when tax revenue exceeds spending. The national debt is the total accumulated stock of past borrowing that has not yet been repaid.",
              ],
            },
          ],
          keyTerms: [
            { term: "Fiscal policy", definition: "The use of government spending and taxation to influence the economy." },
            { term: "Budget deficit", definition: "When government spending exceeds tax revenue in a given year." },
            { term: "National debt", definition: "The total accumulated stock of government borrowing not yet repaid." },
          ],
          examTip:
            "Keep fiscal policy (government spending/tax, decided by government) and monetary policy (interest rates/money supply, decided by the Bank of England) in two clearly separate mental boxes — this distinction is examined directly and often.",
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
                "Monetary policy is the use of interest rates (and the money supply) to influence the economy, set in the UK by the Bank of England's Monetary Policy Committee, independently of government.",
                "Cutting the base interest rate makes borrowing cheaper and saving less attractive, encouraging consumer spending and business investment — this boosts aggregate demand and is used to raise growth or fight low inflation/deflation.",
                "Raising the base interest rate makes borrowing more expensive and saving more attractive, discouraging spending and investment — this reduces aggregate demand and is used to control inflation that is above target.",
              ],
            },
            {
              heading: "Exchange rate effects",
              body: [
                "Interest rate changes also affect the exchange rate: higher UK interest rates tend to attract foreign investment seeking a better return, increasing demand for pounds and causing the pound to appreciate (see 4.3).",
              ],
            },
          ],
          keyTerms: [
            { term: "Monetary policy", definition: "The use of interest rates and money supply to influence the economy, set by the Bank of England." },
            { term: "Base interest rate (Bank Rate)", definition: "The interest rate set by the Bank of England that influences all other rates in the economy." },
          ],
          examTip:
            "When explaining an interest rate change, trace the full chain: rate change → effect on borrowing/saving → effect on consumer spending and business investment → effect on aggregate demand → effect on growth/inflation. Each link is a mark.",
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
                "Supply-side policies aim to increase the economy's productive capacity and efficiency, shifting the PPF outward (see 1.4), rather than managing the level of demand as fiscal and monetary policy do.",
              ],
            },
            {
              heading: "Examples",
              body: [
                "Education and training spending improves the skills and productivity of the workforce. Infrastructure investment (transport, digital networks) lowers costs for firms. Deregulation removes rules that may be holding back competition and enterprise. Tax incentives for investment encourage firms to expand capacity.",
              ],
            },
            {
              heading: "Benefits and limitations",
              body: [
                "Supply-side policies can raise growth without the inflationary pressure that demand-side stimulus can cause, since they increase the economy's capacity rather than just demand within existing capacity.",
                "Their main limitation is time: most supply-side policies (like improving education) take years to have an effect, so they cannot solve a short-term downturn the way fiscal or monetary policy can.",
              ],
            },
          ],
          keyTerms: [
            { term: "Supply-side policy", definition: "Government policy aimed at increasing an economy's productive capacity." },
            { term: "Deregulation", definition: "Removing rules and restrictions that limit competition or business activity." },
          ],
          examTip:
            "If a question asks for a policy with a long-term effect on the productive capacity of the economy, supply-side policy is almost always the correct category — fiscal and monetary policy are demand-side and act faster but don't raise the economy's ceiling.",
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
                "Externalities are a key cause: costs or benefits of an economic activity that affect a third party not involved in the transaction. A negative externality (e.g. pollution from a factory) means the free market produces too much of the good, because the firm doesn't pay for the harm it causes others. A positive externality (e.g. education, vaccination) means the free market produces too little, because the individual doesn't capture the full benefit to society.",
                "Merit goods (e.g. education, healthcare) tend to be under-consumed if left purely to the market, because individuals underestimate the benefit to themselves and others. Demerit goods (e.g. tobacco, alcohol) tend to be over-consumed, because individuals underestimate the harm.",
              ],
            },
            {
              heading: "Government intervention",
              body: [
                "Governments can intervene in several ways: taxes on goods with negative externalities/demerit goods to raise their price and reduce consumption; subsidies for goods with positive externalities/merit goods to lower their price and increase consumption; regulation (laws and standards, e.g. pollution limits); direct provision of goods (e.g. state education, the NHS); and information campaigns to correct consumers' underestimation of costs or benefits.",
              ],
            },
          ],
          keyTerms: [
            { term: "Market failure", definition: "When the free market fails to allocate resources efficiently." },
            { term: "Externality", definition: "A cost or benefit of an economic activity affecting a third party not involved in the transaction." },
            { term: "Merit good", definition: "A good that is under-consumed by the free market because its benefits are underestimated." },
            { term: "Demerit good", definition: "A good that is over-consumed by the free market because its harms are underestimated." },
          ],
          examTip:
            "For any market failure question, name the specific externality or good type first (e.g. 'this is a negative externality'), then name the specific government tool used to correct it (e.g. 'a tax') — don't just say 'the government should intervene' without specifying how.",
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
                "Countries trade because of differences in the resources, climate, skills and technology available to them. Comparative advantage — the idea that a country should specialise in producing goods it can produce relatively more efficiently than other goods, and trade for the rest — explains why trade can make all trading countries better off, even if one country is more efficient at producing everything.",
              ],
            },
            {
              heading: "Benefits and risks",
              body: [
                "Benefits of trade include: access to a wider range of goods than a country could produce alone, lower prices through competition and economies of scale, and higher living standards through specialisation.",
                "Risks include: domestic industries struggling to compete with cheaper imports (potentially causing structural unemployment, see 3.2), and greater exposure to economic shocks in other countries.",
              ],
            },
            {
              heading: "Trade protectionism",
              body: [
                "Protectionism is when a government restricts imports to protect domestic industries, using tools such as tariffs (taxes on imports), quotas (limits on the quantity of imports), and subsidies for domestic producers. Protectionism can save domestic jobs in the short term but tends to raise prices for consumers and can provoke retaliation from other countries.",
              ],
            },
          ],
          keyTerms: [
            { term: "Comparative advantage", definition: "The ability to produce a good at a lower opportunity cost than another country." },
            { term: "Tariff", definition: "A tax placed on imported goods." },
            { term: "Quota", definition: "A limit on the quantity of a good that can be imported." },
          ],
          examTip:
            "When evaluating protectionism, always weigh the benefit to the protected domestic industry/jobs against the cost to domestic consumers of higher prices and less choice — a one-sided answer rarely reaches top marks.",
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
                "A persistent large deficit can be a concern if it reflects a fundamental lack of competitiveness, though a deficit funded by attracting foreign investment is generally less concerning than one funded by unsustainable borrowing.",
              ],
            },
          ],
          keyTerms: [
            { term: "Balance of payments", definition: "A record of a country's financial transactions with the rest of the world." },
            { term: "Current account deficit", definition: "When the value of imports exceeds the value of exports." },
            { term: "Current account surplus", definition: "When the value of exports exceeds the value of imports." },
          ],
          examTip:
            "Don't assume a deficit is automatically 'bad' — examiners reward answers that consider what is causing it and how it is being financed, not a blanket judgement.",
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
                "An exchange rate is the value of one currency expressed in terms of another (e.g. £1 = $1.25). In a floating exchange rate system, the rate is determined by the demand for and supply of the currency on foreign exchange markets, using the same demand-and-supply logic as any other market.",
                "Demand for a currency increases (causing appreciation) when, for example, foreigners want to buy more of that country's exports, when interest rates rise (attracting investors seeking a better return, see 3.6), or when the country is seen as a safe/attractive place to invest.",
              ],
            },
            {
              heading: "Appreciation and depreciation",
              body: [
                "Appreciation is a rise in the value of a currency against other currencies. It makes exports more expensive for foreign buyers (potentially reducing export sales) and imports cheaper for domestic buyers (potentially increasing imports) — this can worsen a current account position.",
                "Depreciation is a fall in the value of a currency. It makes exports cheaper for foreign buyers (potentially boosting export sales) and imports more expensive for domestic buyers — this can improve a current account position, but also raises the price of imported goods, contributing to cost-push inflation.",
              ],
            },
          ],
          keyTerms: [
            { term: "Exchange rate", definition: "The value of one currency expressed in terms of another." },
            { term: "Appreciation", definition: "A rise in the value of a currency against other currencies." },
            { term: "Depreciation", definition: "A fall in the value of a currency against other currencies." },
          ],
          examTip:
            "A strong pound is good for consumers buying imports but bad for exporters — always specify which group (consumers, exporters, importers) you're referring to rather than saying an exchange rate change is simply 'good' or 'bad' for 'the economy'.",
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
                "Globalisation is the increasing economic interdependence and integration of countries around the world, driven by falling transport and communication costs, reduced trade barriers, the growth of multinational companies, and improvements in technology.",
              ],
            },
            {
              heading: "Multinational companies",
              body: [
                "A multinational company (MNC) operates in more than one country. MNCs can bring benefits to a host country, including jobs, investment, new technology and skills, and increased tax revenue. Potential drawbacks include profits being sent back to the home country rather than reinvested locally, and MNCs having significant bargaining power over local governments and workers.",
              ],
            },
            {
              heading: "Winners and losers",
              body: [
                "Globalisation can raise living standards overall through greater trade, investment and choice, but the gains are not shared equally. Some workers and industries in developed countries have faced job losses as production has shifted to countries with lower labour costs, while workers in some developing countries have gained new employment opportunities.",
              ],
            },
          ],
          keyTerms: [
            { term: "Globalisation", definition: "The increasing economic interdependence and integration of countries." },
            { term: "Multinational company (MNC)", definition: "A company that operates and produces in more than one country." },
          ],
          examTip:
            "Globalisation essay questions reward a balanced answer that identifies specific winners and specific losers (e.g. 'consumers gain from lower prices, but domestic manufacturing workers may lose jobs to lower-cost countries') rather than a single overall verdict.",
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
