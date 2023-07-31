import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}
  courses = [
    {
      id: 'hello',
      name: 'javascript for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 102,
      name: 'angular for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 103,
      name: 'typescript for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 104,
      name: 'reACT for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 105,
      name: 'javascript for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 106,
      name: 'VU JS for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 107,
      name: 'javascript for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 108,
      name: 'html for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    {
      id: 109,
      name: 'css for begainners',
      author: 'john',
      duration: 40,
      type: 'free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/',
      description:
        'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',
    },
    // {
    //   id: 110,
    //   name: 'mysql for begainners',
    //   author: 'john',
    //   duration: 40,
    //   type: 'free',
    //   price: 0.0,
    //   ratings: 3.5,
    //   image: '../../assets/',
    //   description:
    //     'lorem tur adipisicing elit. Maiores quo enim deserunt. Tenetur itaque esse pariatur sapiente ad fuga eum voluptatem vero aliquid atque? Sed in laborum accusantium est illo.',

    //   blogImage:
    //     '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
    //   blogHeading:
    //     'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
    //   blogText1:
    //     'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora',
    //   MDimage: '../../assets/images/blog/nvrao.png',
    //   mdName: '  Dr. N.V. Rao',
    //   mdStudy: ' PhD in Organic Chemistry',
    //   companyName: ' MD Metrochem API Pvt Ltd',

    //   blogDetail1: [
    //     {
    //       blogContent:
    //         'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of drugs capable of treating diseases from cancer to AIDS has had a dramatic impact on the lives of billions of people worldwide.',
    //     },
    //     {
    //       blogContent:
    //         'According to figures from the European Federation of Pharmaceutical Industry, the pharmaceutical industry itself grew from relatively humble origins to one estimated to represent more than €614 billion worldwide in 2011.But there’s trouble in the industry that brought us Valium, Prozac & Viagra.',
    //     },
    //     {
    //       blogContent:
    //         'For years, the pharmaceutical industry has been able to sit back and relax as blockbuster drugs have raked at high profit margins. These drugs, protected by patents, accounted for an enormous percentage of revenue for large pharmaceutical companies. When patents expire, there is often a huge loss of revenue for the original manufacturer, estimating that generic drugs account for up to 90% of sales, according to the Healthcare Global report.',
    //     },
    //     {
    //       blogContent:
    //         'The industry is now seeking to reduce operating costs and improve the timeframe of the research and development cycle. Here are 5 strategies that pharmaceutical companies can use to improve efficiency and streamline R&D processes:',
    //     },
    //   ],

    //   blogDetail2: [
    //     {
    //       heading1: '1: Outsourcing:',
    //       heading1Content:
    //         'Over the last decade, pharmaceutical companies have been outsourcing at least part of their R&D processes to emerging markets and low cost centers. As in other industries, significant savings can be made by moving certain operations to areas where labor costs are cheaper. According to AMR Research, the majority of pharmaceutical and biotech companies today outsource at least a proportion of their clinical trial management processes. However, some experts warn that outsourcing the process as critical to the future success of the company as R&D carries considerable risks. A report by PA Consulting recommends that companies consider moving only parts of research and development to lower cost centers. Innovation, says the consulting firm, is still centered at home.',
    //     },
    //     {
    //       heading1: '2: Business Process Management (BPM)',
    //       heading1Content:
    //         'Business Process Management can help pharmaceutical companies achieve efficiency through the combination of process improvement, standardization and technology automation. Insta-intelligence, a consulting group, identified a number of areas where BPM can help pharmaceutical organizations reduce their time to market and allow regulatory compliance in the research and development phase of a new drug, including: automation and simplification of clinical trial processes, minimizing errors and risks, improving communication and facilitating collaborative research environment.',
    //     },
    //     {
    //       heading1: '3: Lean process improvement',
    //       heading1Content:
    //         'Lean process improvement, a methodology based on eliminating ‘non-value-added’ activities, has been used in manufacturing for years. However, increasingly, industries such as healthcare, banking and, indeed, pharmaceuticals have jumped onto the lean belt, as the method has proved effective in increasing operating efficiency and reducing costs. Simple lean techniques such as 5S (which has been described as ‘organizational housekeeping’) and 5-why can help improve the efficiency of the workplace within laboratories, while the focus on eliminating unnecessary steps can help speed up certain processes to reduce cycle times.',
    //     },
    //     {
    //       heading1: '4: Big data:',
    //       heading1Content:
    //         'The much-vaunted arrival of “big data” – i.e. a larger volume of data than we have ever been able to analyze – holds great potential for pharmaceutical companies looking for insights that could give rise to the new blockbuster drugs that the industry needs. In a recent article published on Forbes.com, strategy consultancy McKinsey noted that big data could help pharmaceutical companies drive down costs and increase patient safety by extracting “real world data” from healthcare providers.',
    //     },
    //     {
    //       heading1:
    //         '5: Strategic industry partnerships & cross company standardization',
    //       heading1Content:
    //         'While not strictly a process excellence technique, the strategic involvement of pharmaceutical companies in external industry partnerships can help to streamline and improve operations that cannot be undertaken in isolation by one company.',
    //       heading1Content2:
    //         'That is the principle behind the recently announced initiative that a group of 10 major pharmaceutical companies – GlaxoSmithKline, Pfizer, Johnson & Johnson, Bristol-Myers Squibb, Eli Lilly, Abbott Laboratories, AstraZeneca, Sanofi, Boehringer Ingelheim, and Genentech, a Roche Group unit – have signed an initiative aimed at improving the way clinical trials are conducted.',
    //       heading1Content3:
    //         '“There is widespread alignment among the heads of R&D at major pharmaceutical companies that there is a critical need to substantially increase the number of innovative new medicines, while eliminating inefficiencies that drive up R&D costs,” said Garry Neil, CEO of TransCelerate BioPharma, which is leading the effort.',
    //     },
    //   ],

    //   previousPost: 'Active Pharmaceutical Manufacturing In India',
    //   youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
    //   youMightAlsoLikeImage:
    //     '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
    //   postTitel: 'Active Pharmaceutical Manufacturing In India',
    //   postTime: 'February 4, 2021',
    // },
  ];

  blog = [
    {
      id: 'strategies-to-reduce-costs-and-improve-the-efficiency-of-pharmaceutical-rd',
      blogImage:
        '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
      blogHeading:
        'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
      blogText1:
        'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of…',
        postTime: 'February 4, 2021',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
        Intermediates: 'Intermediates',
        Pellets:'Pellets',
        spanDash1:'/',
        spanDash2:'/',

      blogDetail1: [
        {
          blogContent:
            'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of drugs capable of treating diseases from cancer to AIDS has had a dramatic impact on the lives of billions of people worldwide.',
        },
        {
          blogContent:
            'According to figures from the European Federation of Pharmaceutical Industry, the pharmaceutical industry itself grew from relatively humble origins to one estimated to represent more than €614 billion worldwide in 2011.But there’s trouble in the industry that brought us Valium, Prozac & Viagra.',
        },
        {
          blogContent:
            'For years, the pharmaceutical industry has been able to sit back and relax as blockbuster drugs have raked at high profit margins. These drugs, protected by patents, accounted for an enormous percentage of revenue for large pharmaceutical companies. When patents expire, there is often a huge loss of revenue for the original manufacturer, estimating that generic drugs account for up to 90% of sales, according to the Healthcare Global report.',
        },
        {
          blogContent:
            'The industry is now seeking to reduce operating costs and improve the timeframe of the research and development cycle. Here are 5 strategies that pharmaceutical companies can use to improve efficiency and streamline R&D processes:',
        },
      ],

      blogDetail2: [
        {
          heading1: '1: Outsourcing:',
          heading1Content:
            'Over the last decade, pharmaceutical companies have been outsourcing at least part of their R&D processes to emerging markets and low cost centers. As in other industries, significant savings can be made by moving certain operations to areas where labor costs are cheaper. According to AMR Research, the majority of pharmaceutical and biotech companies today outsource at least a proportion of their clinical trial management processes. However, some experts warn that outsourcing the process as critical to the future success of the company as R&D carries considerable risks. A report by PA Consulting recommends that companies consider moving only parts of research and development to lower cost centers. Innovation, says the consulting firm, is still centered at home.',
        },
        {
          heading1: '2: Business Process Management (BPM)',
          heading1Content:
            'Business Process Management can help pharmaceutical companies achieve efficiency through the combination of process improvement, standardization and technology automation. Insta-intelligence, a consulting group, identified a number of areas where BPM can help pharmaceutical organizations reduce their time to market and allow regulatory compliance in the research and development phase of a new drug, including: automation and simplification of clinical trial processes, minimizing errors and risks, improving communication and facilitating collaborative research environment.',
        },
        {
          heading1: '3: Lean process improvement',
          heading1Content:
            'Lean process improvement, a methodology based on eliminating ‘non-value-added’ activities, has been used in manufacturing for years. However, increasingly, industries such as healthcare, banking and, indeed, pharmaceuticals have jumped onto the lean belt, as the method has proved effective in increasing operating efficiency and reducing costs. Simple lean techniques such as 5S (which has been described as ‘organizational housekeeping’) and 5-why can help improve the efficiency of the workplace within laboratories, while the focus on eliminating unnecessary steps can help speed up certain processes to reduce cycle times.',
        },
        {
          heading1: '4: Big data:',
          heading1Content:
            'The much-vaunted arrival of “big data” – i.e. a larger volume of data than we have ever been able to analyze – holds great potential for pharmaceutical companies looking for insights that could give rise to the new blockbuster drugs that the industry needs. In a recent article published on Forbes.com, strategy consultancy McKinsey noted that big data could help pharmaceutical companies drive down costs and increase patient safety by extracting “real world data” from healthcare providers.',
        },
        {
          heading1:
            '5: Strategic industry partnerships & cross company standardization',
          heading1Content:
            'While not strictly a process excellence technique, the strategic involvement of pharmaceutical companies in external industry partnerships can help to streamline and improve operations that cannot be undertaken in isolation by one company.',
          heading1Content2:
            'That is the principle behind the recently announced initiative that a group of 10 major pharmaceutical companies – GlaxoSmithKline, Pfizer, Johnson & Johnson, Bristol-Myers Squibb, Eli Lilly, Abbott Laboratories, AstraZeneca, Sanofi, Boehringer Ingelheim, and Genentech, a Roche Group unit – have signed an initiative aimed at improving the way clinical trials are conducted.',
          heading1Content3:
            '“There is widespread alignment among the heads of R&D at major pharmaceutical companies that there is a critical need to substantially increase the number of innovative new medicines, while eliminating inefficiencies that drive up R&D costs,” said Garry Neil, CEO of TransCelerate BioPharma, which is leading the effort.',
        },
      ],

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',

      productpage:[
        {
          productImage:'../../assets/images/blog/research-development-metrochem-api-private-limited.png',
          productHeading:
          'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
          productText1:
          'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of…',
          postTime: 'February 4, 2021',
          ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
          Intermediates: 'Intermediates',
          Pellets:'Pellets',
          spanDash1:'/',
          spanDash2:'/',
        }
      ]
    },
    {
      id: 'active-pharmaceutical-manufacturing-in-india',
      blogImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      blogHeading: 'Active Pharmaceutical Manufacturing In India',
      blogText1:
        'The active ingredient used in medication is called API (Active Pharmaceutical Ingredient). For instance, a painkiller contains an active ingredient to relieve pain. This is known as the API. There…',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
      blogDetail1: [
        {
          blogContent:
            'The active ingredient used in medication is called API (Active Pharmaceutical Ingredient). For instance, a painkiller contains an active ingredient to relieve pain. This is known as the API.',
        },
        {
          blogContent:
            'There is an effect on a small portion of the active ingredient, so the drug includes just a tiny part of the active ingredient. On the box of OTC (over-the-counter) products, you can find the name and quantity of the active ingredient found in the prescription.',
        },
        {
          blogContent:
            'The Indian API Market will expand rapidly at a CAGR of 8.57 percent during the 2020-2026 period, according to Global Market Estimates. The Indian drug industry is the third-largest in the world, and it is th e 13th largest industry as far as volume is concerned. The rapidly growing incidence of chronic infections, along with the increasing value of traditional drugs, are major reasons for the positive growth of the Indian API industry.',
        },
        {
          blogContent:
            'In addition, market growth is powered by headways in competitive drug fixing (API) assembly and development of the biopharmaceutical industry. The positive effect of market growth is a large-scale set-up of API producers in the country. The Government of India’s promotion of APIs through clusters and Output Linked Incentive (PLI) programs has dramatically changed the dynamics of the industry.',
        },
        {
          blogContent:
            'As per the latest results, China accounts for 30 percent of the non-exclusive API vendor market worldwide. After China, the major producers of non-exclusive APIs are the United States and India. Thus, making India the main outsourcing center for the development of APIs. China has grown as the worldwide leader in the development of APIs by volume of worldwide API demand. A crucial portion of APIs and intermediates are owned by China worldwide. The Indian API industry is projected at INR 798 billion in 2020, as per the GME report, and is expanded to cross INR 1.307 billion by 2026, at a CAGR of 8.57 percent. The China API industry is also expected to reach INR 982 trillion in 2020 and to reach INR 1,431 trillion by 2026, at a CAGR of 6.49 percent.',
        },
        {
          blogContent:
            'Innovators (marketers of brand-name products, as opposed to generic drug companies) are gradually looking beyond their normal community of closely related European suppliers. Meanwhile, conventional generic companies are looking for bulk assets in India and China, while specialty pharmaceutical companies have developed new demands for more advanced capabilities than traditional generics need. API manufacturers would need to adjust to this evolving environment to stay competitive. Innovators have traditionally relied on a limited number of suppliers with whom they operate confidentially. Innovators also prefer to carry out the final stages of API synthesis themselves, outsourcing (at most) the processing of intermediates in the late stage. While this pattern continues to predominate, innovators have begun to look beyond their current European suppliers to realize benefits from partnerships with Indian and Chinese API manufacturers.',
        },
        {
          blogContent:
            'In certain situations, a more dynamic but ultimately more flexible and cost-effective supply chain can be generated by the ability to exploit established European relationships with Indian process chemistry. Solvay’s supply of eprosartan mesylate, an antihypertensive sold under the brand name Teveten in the U.S., is a good example, cited in an issue of Chemical & Engineering News.',
        },
        {
          blogContent:
            'Several variables make India an attractive choice for the sourcing of active ingredients. India has low cost of production, complex synthesis capabilities, increased cGMP enforcement experience, and a wide local dose market to gain experience. India is also known for having a large number of efficient chemists, many with U.S. and European Ph.D.s, providing rapid and innovative production of processes. In comparatively short periods of time, Indian companies can tackle complex syntheses with these tools. For example, Reddy-Cheminor was motivated by such attentive and well-staffed development teams to demand a development speed twice that of any U.S. or European organization. In addition, India’s loose patent laws have led to strong domestic demand for many finished dose products, providing manufacturers of API and dose type products with more product experience over a longer period of time than manufacturers in controlled countries.',
        },
        {
          blogContent:
            'Currently, in India, new drugs are often introduced early, if not first. India has thus established itself in controlled and unregulated markets as a source of both complex synthetic active ingredients and finished dose-form products.',
        },



      ],

      // blogDetail2: [
      //   {
      //     heading1: '1: Outsourcing:',
      //     heading1Content:
      //       'Over the last decade, pharmaceutical companies have been outsourcing at least part of their R&D processes to emerging markets and low cost centers. As in other industries, significant savings can be made by moving certain operations to areas where labor costs are cheaper. According to AMR Research, the majority of pharmaceutical and biotech companies today outsource at least a proportion of their clinical trial management processes. However, some experts warn that outsourcing the process as critical to the future success of the company as R&D carries considerable risks. A report by PA Consulting recommends that companies consider moving only parts of research and development to lower cost centers. Innovation, says the consulting firm, is still centered at home.',
      //   },
      //   {
      //     heading1: '2: Business Process Management (BPM)',
      //     heading1Content:
      //       'Business Process Management can help pharmaceutical companies achieve efficiency through the combination of process improvement, standardization and technology automation. Insta-intelligence, a consulting group, identified a number of areas where BPM can help pharmaceutical organizations reduce their time to market and allow regulatory compliance in the research and development phase of a new drug, including: automation and simplification of clinical trial processes, minimizing errors and risks, improving communication and facilitating collaborative research environment.',
      //   },
      //   {
      //     heading1: '3: Lean process improvement',
      //     heading1Content:
      //       'Lean process improvement, a methodology based on eliminating ‘non-value-added’ activities, has been used in manufacturing for years. However, increasingly, industries such as healthcare, banking and, indeed, pharmaceuticals have jumped onto the lean belt, as the method has proved effective in increasing operating efficiency and reducing costs. Simple lean techniques such as 5S (which has been described as ‘organizational housekeeping’) and 5-why can help improve the efficiency of the workplace within laboratories, while the focus on eliminating unnecessary steps can help speed up certain processes to reduce cycle times.',
      //   },
      //   {
      //     heading1: '4: Big data:',
      //     heading1Content:
      //       'The much-vaunted arrival of “big data” – i.e. a larger volume of data than we have ever been able to analyze – holds great potential for pharmaceutical companies looking for insights that could give rise to the new blockbuster drugs that the industry needs. In a recent article published on Forbes.com, strategy consultancy McKinsey noted that big data could help pharmaceutical companies drive down costs and increase patient safety by extracting “real world data” from healthcare providers.',
      //   },
      //   {
      //     heading1:
      //       '5: Strategic industry partnerships & cross company standardization',
      //     heading1Content:
      //       'While not strictly a process excellence technique, the strategic involvement of pharmaceutical companies in external industry partnerships can help to streamline and improve operations that cannot be undertaken in isolation by one company.',
      //     heading1Content2:
      //       'That is the principle behind the recently announced initiative that a group of 10 major pharmaceutical companies – GlaxoSmithKline, Pfizer, Johnson & Johnson, Bristol-Myers Squibb, Eli Lilly, Abbott Laboratories, AstraZeneca, Sanofi, Boehringer Ingelheim, and Genentech, a Roche Group unit – have signed an initiative aimed at improving the way clinical trials are conducted.',
      //     heading1Content3:
      //       '“There is widespread alignment among the heads of R&D at major pharmaceutical companies that there is a critical need to substantially increase the number of innovative new medicines, while eliminating inefficiencies that drive up R&D costs,” said Garry Neil, CEO of TransCelerate BioPharma, which is leading the effort.',
      //   },
      // ],
      blog3Heading:'Business Key Insights:',
      blogDetails3:[
        {
          point1:'The Indian API market will expand rapidly with a CAGR of 8.57% during  the 2020-2026 period.'
        },
        {
          point1:'The largest share of the worldwide complex drug market was the generic API   fragment.'
        },
        {
          point1:'The oncology fragment has the most elevated CAGR over the projected time frame, according to the framework outlook.'
        },
        {
          point1:'During the figure time frame, the prescription API segment would overtake the Indian API market'
        },
        {
          point1:'The Indian API industry has a significant share of captive manufacturers than merchant manufacturers, making this country one of the world’s leading API'
        },
      ],
      blog4heading:'Major companies in the market are:',
      blogDetails4:'Aarti Drugs, Hikal, Neuland Labs, Solara Active Pharma Sciences, Lasa Supergenerics, Shilpa Medicare, Gujarat Themis, Granules India, Wanbury Ltd., Wockhardt, Apollo Pharmaceuticals API Manufacturers India Pvt. Ltd, Cipla, Inc., Sun Pharmaceutical Industries Ltd., API Pharma Tech, BDR Pharmaceuticals International Pvt. Ltd., Sreepathi Pharmaceuticals Limited, Divis Laboratories, Mehta API Pvt. Ltd, Dr. Reddy’s, and Ipca Laboratories Ltd. among others.',
      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',
      postTime: 'February 4, 2021',
    },
    {
      id: 'covid-19-updates',
      blogImage: '../../assets/images/blog/blog-1.jpg',
      blogHeading: 'How to stay Sane during Lockdown (COVID-19)',
      blogText1:
        'Humans are social creatures, so as you might be realizing, staying in doors for an extended period of time can lead to boredom and craziness. Here are some ways you…',
       covid: 'COVID-19 Updates',
      blogDetail3: [
        {
          blogContent3:'Humans are social creatures, so as you might be realizing, staying in doors for an extended period of time can lead to boredom and craziness. Here are some ways you can maintain your sanity during home isolation. Do something creative like painting, drawing, playing an instrument, etc. You have so many options out there.',
          blogImage:'../../assets/images/blog/covid-1.jpg',
        },
        {
          blogImage:'../../assets/images/blog/covid-2.jpg',
          blogContent4:'Keep a routine, whether based around your work schedule, meals, or something else. Use this time to learn something new. You will have a sense of accomplishment taking on a new endeavor.'
        },
        {
          blogImage:
            '../../assets/images/blog/covid-3.jpg',
            blogContent4:'Stay connected with friends and family by having virtual Hangouts. Just because you are stuck at home does not mean you cannot socialize. Practice self-care, exercise, meditate, eat healthy foods, etc. Carve out time to do what makes you feel good. Complete all those home projects you have been putting on the back burner. It will feel good checking these items off your list. This is also an excellent time to organize virtual files.'
        },
        {
          blogImage:
            '../../assets/images/blog/covid-4.jpg',
        },
        {
          blogImage:
            '../../assets/images/blog/covid-5.jpg',
            blogContent4:'By all means, stay up-to-date with the news, but stick to reliable sources and do not go overboard. Limit your intake as it can get pretty overwhelming. Finally, if necessary, seek help from a licensed mental health professional. This can be a difficult time and it is important to focus on your overall well-being as best as you can.'
        },
        {blogImage:'../../assets/images/blog/covid-6.jpg'}
      ],

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',
      postTime: 'February 4, 2021',
    },
  ];



  activePharmaceuticalIngredient = [
    {
      id: 1,
      blogImage:
        '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
      blogHeading:
        'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
      blogText1:
        'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of…',
        postTime: 'February 4, 2021',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
        Intermediates: 'Intermediates',
        Pellets:'Pellets',
        spanDash1:'/',
        spanDash2:'/',

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',

    },
    {
      id: 2,
      blogImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      blogHeading: 'Active Pharmaceutical Manufacturing In India',
      blogText1:
        'The active ingredient used in medication is called API (Active Pharmaceutical Ingredient). For instance, a painkiller contains an active ingredient to relieve pain. This is known as the API. There…',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',
      postTime: 'February 4, 2021',
    },
  ];

  Intermediates = [
    {
      id: 1,
      blogImage:
        '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
      blogHeading:
        'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
      blogText1:
        'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of…',
        postTime: 'February 4, 2021',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
        Intermediates: 'Intermediates',
        Pellets:'Pellets',
        spanDash1:'/',
        spanDash2:'/',

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',

    },
  ]
  pellets = [
    {
      id: 1,
      blogImage:
        '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
      blogHeading:
        'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
      blogText1:
        'The pharmaceutical industry has come a long way since the first drugstore reportedly opened in Baghdad in the 8th century. The relatively recent development of antibiotics and a plethora of…',
        postTime: 'February 4, 2021',
        ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',
        Intermediates: 'Intermediates',
        Pellets:'Pellets',
        spanDash1:'/',
        spanDash2:'/',

      previousPost: 'Active Pharmaceutical Manufacturing In India',
      youMightAlsoLikeHeading: 'YOU MIGHT ALSO LIKE ',
      youMightAlsoLikeImage:
        '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
      postTitel: 'Active Pharmaceutical Manufacturing In India',

    },

  ];


  esg = [
   {
    id:1,
    // id:'policy-on-sustainability-procurement',
    pdf:'../../assets/POLICY-ON-SUSTAINABLE-PROCUREMENT-2.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.'
   },
   {
    id:2,
    // id:'Supplier-Code-of-Conduct',
    pdf:'../../assets/Supplier-Code-of-Conduct-1.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p1:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.'
   },
   {
    id:3,
    // id:'BIO-DIVERSITY-POLICY',
    pdf:'../../assets/Supplier-Code-of-Conduct-1.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p1:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p2 :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.'

   },
   {
    id:4,
    // id:'ENERGY-&-GHG-Policy',
    pdf:'../../assets/Supplier-Code-of-Conduct-1.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p1:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p2:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p3:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.'
   },
   {
    id:5,
    // id:'Water-Management-Policy',
    pdf:'../../assets/Supplier-Code-of-Conduct-1.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p1:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p2:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p3:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p4:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.'
   },
   {
    id:6,
    // id:'PiE',
    pdf:'../../assets/Supplier-Code-of-Conduct-1.pdf',
    p:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p1:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p2:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p3:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p4:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
    p5:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Ad hic officia illo unde excepturi, corporis beatae expedita eius natus ab nisi quidem neque distinctio maiores numquam delectus quia.',
   }
  ]
// --------------------------------


esg1 = [
  {
    id: 'strategies-to-reduce-costs-and-improve-the-efficiency-of-pharmaceutical-rd',
    blogImage:
      '../../assets/images/blog/research-development-metrochem-api-private-limited.png',
    blogHeading:
      'Strategies to Reduce Costs and Improve the Efficiency of Pharmaceutical R&D',
    pdf:'../../assets/documents/BIO-DIVERSITY-POLICY.pdf'


  },
  {
    id: 'active-pharmaceutical-manufacturing-in-india',
    blogImage:
      '../../assets/images/blog/Active-Pharmaceutical-Manufacturing-In-India-metrochem-api-private-limited.png',
    blogHeading: 'Active Pharmaceutical Manufacturing In India',
    blogText1:
      'The active ingredient used in medication is called API (Active Pharmaceutical Ingredient). For instance, a painkiller contains an active ingredient to relieve pain. This is known as the API. There…',
      ActivedPharmaceutical: 'Active Pharmaceutical Ingredient',



  },
  {
    id: 'covid-19-updates',
    blogImage: '../../assets/images/blog/blog-1.jpg',
    blogHeading: 'How to stay Sane during Lockdown (COVID-19)',
    blogText1:
      'Humans are social creatures, so as you might be realizing, staying in doors for an extended period of time can lead to boredom and craziness. Here are some ways you…',
     covid: 'COVID-19 Updates',

  },
];

}



