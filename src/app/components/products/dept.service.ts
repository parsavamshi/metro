import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  ImagePath: string;
  constructor(private http: HttpClient) {
    this.ImagePath = '../../../../assets/images/flags-300x29.png';
  }

  APIsGenericproductPortfolioDetails = [
    {
      sno: 1,
      id: 'omeprazole-api-pellet-manufacturers-in-india',
      productName: 'Omeprazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '73590-58-6',
      details: 'Know More',
      // details
      name: 'Omeprazole API&Pellet',
      image: '../../../assets/images/products/Omeprazole-1.png',
      pdf:'../../../assets/documents/POLICY-ON-SUSTAINABLE-PROCUREMENT.pdf',
      productName1: 'Omeprazole',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '73590-58-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '17',
          letter2: 'H',
          number2: '19',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '345.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Injectable, Powder, Solution, Suspension, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: ` belongs to a class of antisecretory compounds, the substituted benzimidazoles, that suppress gastric acid secretion by specific inhibition of the H+ /K+ ATPase enzyme system at the secretory surface of the gastric parietal cell. Because this enzyme system is regarded as the acid (proton) pump within the gastric mucosa, omeprazole has been characterized as a gastric acid-pump inhibitor, in that it blocks the final step of acid production. This effect is dose-related and leads to inhibition of both basal and stimulated acid secretion irrespective of the stimulus. Animal studies indicate that after rapid disappearance from plasma, omeprazole can be found within the gastric mucosa for a day or more.`,

      indicationTitel: ' is a proton pump inhibitor indicated for:',
      Indication: [
        {
          point1: 'Duodenal Ulcer (adults)',
        },
        {
          point1: 'Gastric Ulcer (adults)',
        },
        {
          point1:
            'Treatment of Gastroesophageal Reflux Disease (GERD) (adults and pediatric patients)',
        },
        {
          point1: 'Maintenance of Healing of Erosive Esophagitis (adults)',
        },
        {
          point1: 'Pathological Hypersecretory Conditions',
        },
      ],
    },

    {
      sno: 2,
      id: 'omeprazole-sodium-api-pellet-manufacturers-in-india',
      productName: 'Omeprazole Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '95510-70-6',
      details: 'Know More',

      name: 'Omeprazole Sodium',
      image: '../../../assets/images/products/Omeprazole-sodium-2.png',
      productName1: 'Omeprazole Sodium',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '95510-70-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '17',
          letter2: 'H',
          number2: '18',
          letter3: 'N',
          number3: '3',
          letter4: 'N a O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '367.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Powder',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' belongs to a class of antisecretory compounds, the substituted benzimidazoles, that suppress gastric acid secretion by specific inhibition of the H+ /K+ ATPase enzyme system at the secretory surface of the gastric parietal cell. Because this enzyme system is regarded as the acid (proton) pump within the gastric mucosa, omeprazole has been characterized as a gastric acid-pump inhibitor, in that it blocks the final step of acid production. This effect is dose-related and leads to inhibition of both basal and stimulated acid secretion irrespective of the stimulus. Animal studies indicate that after rapid disappearance from plasma, omeprazole can be found within the gastric mucosa for a day or more.',
      indicationTitel: 'is a proton pump inhibitor indicated for:',
      Indication: [
        {
          point1: 'Duodenal Ulcer (adults)',
        },
        {
          point1: 'Gastric Ulcer (adults)',
        },
        {
          point1:
            'Treatment of Gastroesophageal Reflux Disease (GERD) (adults and pediatric patients)',
        },
        {
          point1: 'Maintenance of Healing of Erosive Esophagitis (adults)',
        },
        {
          point1: 'Pathological Hypersecretory Conditions',
        },
      ],
    },
    {
      sno: 3,
      id: 'omeprazole-magnesium-api-pellet-manufacturers-in-india',
      productName: 'Omeprazole Magnesium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '95382-33-5',
      details: 'Know More',

      name: 'Omeprazole Magnesium',
      productName1: 'Omeprazole Magnesium',
      image: '../../../assets/images/products/Omeprazole-Magnesium-3.png',
      productDescription: {
        Therapeutic: 'Antiulcerative ',
        CASNumber: '95382-33-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 4',
          letter2: 'H',
          number2: '3 8',
          letter3: 'M g N',
          number3: '6',
          letter4: 'O',
          number4: '6',
          letter5: 'S',
          number5: '2',
          number6: '+2',
        },

        MolecularWeight: '715.1 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Powder, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' belongs to a class of antisecretory compounds, the substituted benzimidazoles, that suppress gastric acid secretion by specific inhibition of the H+ /K+ ATPase enzyme system at the secretory surface of the gastric parietal cell. Because this enzyme system is regarded as the acid (proton) pump within the gastric mucosa, omeprazole has been characterized as a gastric acid-pump inhibitor, in that it blocks the final step of acid production. This effect is dose-related and leads to inhibition of both basal and stimulated acid secretion irrespective of the stimulus. Animal studies indicate that after rapid disappearance from plasma, omeprazole can be found within the gastric mucosa for a day or more.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel: 'is a proton pump inhibitor indicated for:',
      Indication: [
        {
          point1: 'Duodenal Ulcer (adults)',
        },
        {
          point1: 'Gastric Ulcer (adults)',
        },
        {
          point1:
            'Treatment of Gastroesophageal Reflux Disease (GERD) (adults and pediatric patients)',
        },
        {
          point1: 'Maintenance of Healing of Erosive Esophagitis (adults)',
        },
        {
          point1: 'Pathological Hypersecretory Conditions',
        },
      ],
    },
    {
      sno: 4,
      id: 'esomeprazole-magnesium-trihydrate-api-pellet-manufacturers-in-india',
      productName: 'Esomeprazole Magnesium (3H2O)',

      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '217087-09-7',
      details: 'Know More',

      name: 'Esomeprazole Magnesium Trihydrate API&Pellet',
      image: '../../../assets/images/products/Esomeprazole-4.png',
      productName1: 'Esomeprazole Magnesium Trihydrate',
      productDescription: {
        Therapeutic: 'Antiulceratives',
        CASNumber: '217087-09-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 4',
          letter2: 'H',
          number2: '3 6',
          letter3: 'M g N',
          number3: '6',
          letter4: 'O',
          number4: '6',
          letter5: 'S',
          number5: '2',
          letter6: '. 3 H ₂ O',
        },

        MolecularWeight: '767.2 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet ,Capsule, granule, Injectable, Powder',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a quality-driven ',
        manufacturers:
          'Esomeprazole Magnesium Trihydrate API&Pellet Manufacturers in India.',

        extra: `Our manufacturing facility is designed to meet best safety standards.Our products are tested in laboratory and meets the international standards for identity, purity and composition.We are committed to manufacture and supply high quality products to our customers at best price.Our continuous enhancement of the cost reduction cycle to ensure long-term sustainability for various companies.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+ /K+ -ATPase in the gastric parietal cell. The S- and R-isomers of omeprazole are protonated and converted in the acidic compartment of the parietal cell forming the active inhibitor, the achiral sulphenamide. By acting specifically on the proton pump, esomeprazole blocks the final step in acid production, thus reducing gastric acidity. This effect is dose-related up to a daily dose of 20 to 40 mg and leads to inhibition of gastric acid secretion.',
      indicationTitel:
        ' is a prescription drug and proton pump inhibitor(PPI), indicated for the following:',

      Indication: [
        {
          point1: 'Treatment of gastroesophageal reflux disease (GERD)',
        },
        {
          point1: 'Risk reduction of NSAID-associated gastric ulcer ',
        },
        {
          point1:
            'pylori eradication to reduce the risk of duodenal ulcer recurrence',
        },
        {
          point1:
            'Pathological hypersecretory conditions, including Zollinger-Ellison syndrome',
        },
      ],
    },
    {
      sno: 5,
      id: 'esomeprazole-magnesium-dihydrate-manufacturers-in-india-apispellets',
      productName: 'Esomeprazole Magnesium (2H2O)',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '217087-10-0',
      details: 'Know More',

      name: 'Esomeprazole Magnesium Dihydrate API&Pellet',
      image:
        '../../../assets/images/products/Esomeprazole-Magnesium-Dihydrate-5.jpg',
      productName1: 'Esomeprazole Magnesium Dihydrate',
      productDescription: {
        Therapeutic: 'Antiulceratives',
        CASNumber: '217087-10-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 4',
          letter2: 'H',
          number2: '3 6 ',
          letter3: 'M g N',
          number3: '6',
          letter4: 'O',
          number4: '6',
          letter5: 'S',
          number5: '2',
          letter6: '. 2 H ₂ O ',
        },
        MolecularWeight: '749.2 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet ,Capsule, granule, Injectable, Powder',
        MetrochemDevelopmentStatus: 'Commercial',

        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a quality-driven ',
        manufacturers:
          'Esomeprazole Magnesium Dihydrate API&Pellet Manufacturers in India.',

        extra: `Our manufacturing facility is designed to meet best safety standards.Our products are tested in laboratory and meets the international standards for identity, purity and composition.We are committed to manufacture and supply high quality products to our customers at best price.Our continuous enhancement of the cost reduction cycle to ensure long-term sustainability for various companies.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' Dihydrateis a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+ /K+ -ATPase in the gastric parietal cell. The S- and R-isomers of omeprazole are protonated and converted in the acidic compartment of the parietal cell forming the active inhibitor, the achiral sulphenamide. By acting specifically on the proton pump, esomeprazole blocks the final step in acid production, thus reducing gastric acidity. This effect is dose-related up to a daily dose of 20 to 40 mg and leads to inhibition of gastric acid secretion.',
      indicationTitel:
        ' Dihydrateis a prescription drug and proton pump inhibitor(PPI), indicated for the following:',

      Indication: [
        {
          point1: 'Treatment of gastroesophageal reflux disease (GERD)',
        },
        {
          point1: 'Risk reduction of NSAID-associated gastric ulcer ',
        },
        {
          point1:
            'pylori eradication to reduce the risk of duodenal ulcer recurrence',
        },
        {
          point1:
            'Pathological hypersecretory conditions, including Zollinger-Ellison syndrome',
        },
      ],
    },
    {
      sno: 6,
      id: 'esomeprazole-sodium-api-pellet-manufacturers-in-india',
      productName: 'Esomeprazole Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '161796-78-7',
      details: 'Know More',

      name: 'Esomeprazole Sodium',
      image: '../../../assets/images/products/Esomeprazole-sodium-6.png',
      productName1: 'Esomeprazole Sodium',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '161796-78-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '1 8',
          letter3: 'N',
          number3: '3',
          letter4: 'N a O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '367.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+ /K+ -ATPase in the gastric parietal cell. The S- and R-isomers of omeprazole are protonated and converted in the acidic compartment of the parietal cell forming the active inhibitor, the achiral sulphenamide. By acting specifically on the proton pump, esomeprazole blocks the final step in acid production, thus reducing gastric acidity. This effect is dose-related up to a daily dose of 20 to 40 mg and leads to inhibition of gastric acid secretion.',

      indicationTitel:
        ' is a prescription drug and proton pump inhibitor(PPI), indicated for the following:',
      Indication: [
        {
          point1: 'Treatment of gastroesophageal reflux disease (GERD)',
        },
        {
          point1: 'Risk reduction of NSAID-associated gastric ulcer ',
        },
        {
          point1:
            'pylori eradication to reduce the risk of duodenal ulcer recurrence',
        },
        {
          point1:
            'Pathological hypersecretory conditions, including Zollinger-Ellison syndrome',
        },
      ],
    },
    {
      sno: 7,
      id: 'rabeprazole-sodium-api-pellet-manufacturers-in-india',
      productName: 'Rabeprazole Sodium',

      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '117976-90-6',
      details: 'Know More',

      name: 'Rabeprazole Sodium API&Pellet',
      image: '../../../assets/images/products/Omeprazole-1.png',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '117976-90-6',

        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '2 0',
          letter3: 'N',
          number3: '3',
          letter4: 'N a O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '381.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Injectable, Powder, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'belongs to a class of antisecretory compounds (substituted benzimidazole proton-pump inhibitors) that do not exhibit anticholinergic or histamine H2-receptor antagonist properties, but suppress gastric acid secretion by inhibiting the gastric H+ , K+ ATPase at the secretory surface of the gastric parietal cell. Because this enzyme is regarded as the acid (proton) pump within the parietal cell, rabeprazole has been characterized as a gastric proton-pump inhibitor. Rabeprazole blocks the final step of gastric acid secretion. In gastric parietal cells, rabeprazole is protonated, accumulates, and is transformed to an active sulfenamide. When studied in vitro, rabeprazole is chemically activated at pH 1.2 with a half-life of 78 seconds. It inhibits acid transport in porcine gastric vesicles with a half-life of 90 seconds.',

      indicationTitel:
        'ACIPHEX delayed-release tablets is a proton pump inhibitor (PPI) indicated in adults for:',
      Indication: [
        {
          point1:
            'Healing of Erosive or Ulcerative Gastroesophageal Reflux Disease (GERD)',
        },
        {
          point1: 'Maintenance of Healing of Erosive or Ulcerative GERD',
        },
        {
          point1: 'Treatment of Symptomatic GERD',
        },
        {
          point1: 'Healing of Duodenal Ulcers',
        },
        {
          point1:
            'Helicobacter pylori Eradication to Reduce Risk of Duodenal Ulcer Recurrence',
        },
        {
          point1: `Treatment of Pathological Hypersecretory Conditions, Including Zollinger-Ellison Syndrome
              In adolescent patients 12 years of age and older for:`,
        },
        {
          point1: 'Short-term Treatment of Symptomatic GERD',
        },
      ],
    },
    {
      sno: 8,
      id: 'dexrabeprazole-sodium-api-pellet-manufacturer-in-india',
      productName: 'Dexrabeprazole Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '171440-18-9',
      details: 'Know More',

      name: 'Dexrabeprazole Sodium API&Pellet',
      productName1: 'Dexrabeprazole Sodium API',
      image: '../../../assets/images/products/dexrabeprazole-8.png',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '171440-18-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '2 0',
          letter3: 'N',
          number3: '3',
          letter4: 'N a O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '381.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet , Injectable',
        MetrochemDevelopmentStatus: 'Commercial',

        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a well-known',
        manufacturers:
          'Dexrabeprazole Sodium API&Pellet Manufacturer in India.',

        extra: `We have well-defined quality policies and our products will be subjected to strict quality control at every stage of production. Our products are going to meet the international quality standards and exports around the world. We are manufacturing and supplying products at its most affordable cost by optimizing the scale of production & continuous improvement.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a PPI that suppresses gastric acid secretion by inhibiting the gastric H+/K+ ATPase at the secretory surface of the gastric parietal cell.',
      indicationTitel:
        ' is used in the treatment of stomach and intestinal ulcers (gastric and duodenal ulcers), reflux esophagitis, or GERD.It may be classified as an antireflux drug or an antacid.The dosage depends upon the age, weight, medical history of the patient, health conditions and the response to the therapy. Most of the medications are contraindicated in patients who have suffered or are suffering from cardiac disorders, lungs or liver diseases or renal diseases.In such cases the determination of dosage requires immense precaution.',

      Indication: [
        {
          point1: 'Duodenal Ulcer (adults)',
        },
        {
          point1: 'Gastric Ulcer (adults)',
        },
        {
          point1:
            'Treatment of Gastroesophageal Reflux Disease (GERD) (adults and pediatric patients)',
        },
        {
          point1: 'Maintenance of Healing of Erosive Esophagitis (adults)',
        },
        {
          point1: 'Pathological Hypersecretory Conditions',
        },
      ],
    },
    {
      sno: 9,
      id: 'lansoprazole-api-pellet-manufacturers-in-india',
      productName: 'Lansoprazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '103577-45-3',
      details: 'Know More',

      name: 'Lansoprazole API&Pellet',
      image: '../../../assets/images/products/Lansoprazole-9.png',
      productName1: 'Lansoprazole ',
      productDescription: {
        Therapeutic: 'Gastroprokinetic',
        CASNumber: '103577-45-3',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 6',
          letter2: 'H',
          number2: '1 4',
          letter3: 'F',
          number3: '3',
          letter4: 'N',
          number4: '3',
          letter5: 'O',
          number5: '2',
          letter6: 'S',
        },
        MolecularWeight: '369.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet ,Solution, Suspension ,Powder',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' belongs to a class of antisecretory compounds, the substituted benzimidazoles, that suppress gastric acid secretion by specific inhibition of the (H+ , K+ )-ATPase enzyme system at the secretory surface of the gastric parietal cell. Because this enzyme system is regarded as the acid (proton) pump within the parietal cell, lansoprazole has been characterized as a gastric acid-pump inhibitor, in that it blocks the final step of acid production. This effect is dose-related and leads to inhibition of both basal and stimulated gastric acid secretion irrespective of the stimulus. Lansoprazole does not exhibit anticholinergic or histamine type-2 antagonist activity.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is a proton pump inhibitor (PPI) indicated for use in the treatment of:',

      Indication: [
        { point1: 'Short-Term Treatment of Active Duodenal Ulcer' },
        {
          point1:
            'pylori Eradication to Reduce the Risk of Duodenal Ulcer Recurrence',
        },
        { point1: 'Maintenance of Healed Duodenal Ulcers' },
        { point1: 'Short-Term Treatment of Active Benign Gastric Ulcer' },
        { point1: 'Healing of NSAID-Associated Gastric Ulcer' },
        { point1: 'Risk Reduction of NSAID-Associated Gastric Ulcer' },
        { point1: 'Gastroesophageal Reflux Disease (GERD)' },
        { point1: 'Maintenance of Healing of Erosive Esophagitis (EE)' },
        {
          point1:
            'Pathological Hypersecretory Conditions Including ZollingerEllison Syndrome (ZES)',
        },
      ],
    },
    {
      sno: 10,
      id: 'dexlansoprazole-api-pellet-manufacturer-in-india',
      productName: 'Dexlansoprazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '313640-86-7',
      details: 'Know More',

      name: 'Dexlansoprazole API&Pellet',
      image: '../../../assets/images/products/dexlansoprazole-10.png',
      productName1: 'Dexlansoprazole',
      productDescription: {
        Therapeutic: 'Antiulceratives',
        CASNumber: '138530-94-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 6',
          letter2: 'H',
          number2: '1 4',
          letter3: 'F',
          number3: '3',
          letter4: 'N',
          number4: '3',
          letter5: 'O',
          number5: '2',
          letter6: 'S',
        },
        MolecularWeight: '369.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet, Capsulet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a PPI that suppresses gastric acid secretion by specific inhibition of the (H+ , K+ )-ATPase in the gastric parietal cell. By acting specifically on the proton pump, dexlansoprazole blocks the final step of acid production.',
      indicationTitel: ' is a proton pump inhibitor (PPI) indicated for:',

      Indication: [
        { point1: 'Healing of all grades of erosive esophagitis (EE).' },
        { point1: ' Maintaining healing of EE and relief of heartburn.' },
        {
          point1:
            'Treating heartburn associated with symptomatic non-erosive gastroesophageal reflux disease (GERD).',
        },
      ],
    },

    {
      sno: 11,
      id: 'dexlansoprazole-sesquihydrate-amorphous-api-pellet-manufacturers-in-indi',
      productName: 'Dexlansoprazole Sesquihydrate Amorphous',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '313640-86-7',
      details: 'Know More',

      name: 'Dexlansoprazole Sesquihydrate Amorphous API&Pellet',
      image:
        '../../../assets/images/products/DexlansoprazoleSesquihydrate-Amorphous-11.png',
      productDescription: {
        Therapeutic: 'Antiulceratives',
        CASNumber: '138530-94-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 2',
          letter2: 'H',
          number2: '3 4',
          letter3: 'F',
          number3: '6',
          letter4: 'N',
          number4: '6',
          letter5: 'O',
          number5: '7',
          letter6: 'S',
          number62: '2',
        },
        MolecularWeight: '792.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet, Capsule',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Dexlansoprazole Sesquihydrate Amorphous is a PPI that suppresses gastric acid secretion by specific inhibition of the (H+ , K+ )-ATPase in the gastric parietal cell. By acting specifically on the proton pump, dexlansoprazole blocks the final step of acid production.',
      indicationTitel:
        'Dexlansoprazole Sesquihydrate Amorphous is a proton pump inhibitor (PPI) indicated for:',
      Indication: [
        { point1: 'Healing of all grades of erosive esophagitis (EE).' },
        { point1: 'Maintaining healing of EE and relief of heartburn.  ' },
        {
          point1:
            'Treating heartburn associated with symptomatic non-erosive gastroesophageal reflux disease (GERD).',
        },
      ],
    },
    {
      sno: 12,
      id: 'pantoprazole-sodium-sesquihydrate-api-manufacturers-in-india',
      productName: 'Pantoprazole Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '164579-32-2',
      details: 'Know More',

      name: 'Pantoprazole Sodium Sesquihydrate',
      image:
        '../../../assets/images/products/Pantoprazole-Sodium-Sesquihydrate-12.png',
      productName1: 'Pantoprazole Sodium',

      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '164579-32-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 2',
          letter2: 'H',
          number2: '3 4',
          letter3: 'F',
          number3: '4',
          letter4: 'N',
          number4: '6',
          letter5: 'N a',
          number5: '2',
          letter6: 'O',
          number62: '1 1',
          letter7: 'S',
          number7: '2',
        },

        MolecularWeight: '864.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Inectable,Solution,Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a proton pump inhibitor (PPI) that suppresses the final step in gastric acid production by covalently binding to the (H+ , K+ )-ATPase enzyme system at the secretory surface of the gastric parietal cell. This effect leads to inhibition of both basal and stimulated gastric acid secretion, irrespective of the stimulus. The binding to the (H+ , K+ )-ATPase results in a duration of antisecretory effect that persists longer than 24 hours for all doses tested (20 mg to 120 mg).',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is a proton pump inhibitor indicated for the following:',

      Indication2: [
        {
          point2:
            'Short-Term Treatment of Erosive Esophagitis Associated With Gastroesophageal Reflux Disease (GERD)',
          text1:
            'Pantoprazole  is indicated in adults and pediatric patients five years of age and older for the short-term treatment (up to 8 weeks) in the healing and symptomatic relief of erosive esophagitis.',
        },

        {
          point2: 'Maintenance of Healing of Erosive Esophagitis',
          text1:
            'Pantoprazole is indicated for maintenance of healing of erosive esophagitis and reduction in relapse rates of daytime and nighttime heartburn symptoms in adult patients with GERD. Controlled studies did not extend beyond 12 months.',
        },

        {
          point2:
            'Pathological Hypersecretory Conditions Including Zollinger-Ellison Syndrome',
          text1:
            'Pantoprazole is indicated for the long-term treatment of pathological hypersecretory conditions, including Zollinger-Ellison syndrome.',
        },
      ],
    },
    {
      sno: 13,
      id: 'pantoprazole-magnesium-api-pellet-manufacturers-in-india',
      productName: 'Pantoprazole Magnesium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '471293-63-7',
      details: 'Know More',

      name: 'Pantoprazole Magnesium API&Pellet',
      image: '../../../assets/images/products/pantoprazole-magnesium-13.png',
      productName1: 'Pantoprazole Magnesium',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '471293-63-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 2',
          letter2: 'H',
          number2: '2 8',
          letter3: 'F',
          number3: '4',
          letter4: 'M g N',
          number4: '6',
          letter5: 'O',
          number5: '8',
          letter6: 'S',
          number62: '2',
        },
        MolecularWeight: '789 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a proton pump inhibitor (PPI) that suppresses the final step in gastric acid production by covalently binding to the (H+ , K+ )-ATPase enzyme system at the secretory surface of the gastric parietal cell. This effect leads to inhibition of both basal and stimulated gastric acid secretion, irrespective of the stimulus. The binding to the (H+ , K+ )-ATPase results in a duration of antisecretory effect that persists longer than 24 hours for all doses tested (20 mg to 120 mg).',
      indicationTitel:
        ' is a proton pump inhibitor indicated for the following:',
      Indication2: [
        {
          point2:
            'Short-Term Treatment of Erosive Esophagitis Associated With Gastroesophageal Reflux Disease (GERD)',
          text1:
            'Pantoprazole is indicated in adults and pediatric patients five years of age and older for the short-term treatment (up to 8 weeks) in the healing and symptomatic relief of erosive esophagitis.',
        },
        {
          point2: 'Maintenance of Healing of Erosive Esophagitis',
          text1:
            'Pantoprazole is indicated for maintenance of healing of erosive esophagitis and reduction in relapse rates of daytime and nighttime heartburn symptoms in adult patients with GERD. Controlled studies did not extend beyond 12 months.',
        },
        {
          point2:
            'Pathological Hypersecretory Conditions Including Zollinger-Ellison Syndrome',
          text1:
            'Pantoprazole is indicated for the long-term treatment of pathological hypersecretory conditions, including Zollinger-Ellison syndrome.',
        },
      ],
    },
    {
      sno: 14,
      id: 'ilaprazole-api-manufacturers-in-india',
      productName: 'Ilaprazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-4.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '172152-36-2',
      details: 'Know More',

      name: 'Ilaprazole',
      image: '../../../assets/images/products/Ilaprazole-14.png',
      productDescription: {
        Therapeutic: 'Antiulceratives',
        CASNumber: '172152-36-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 9',
          letter2: 'H',
          number2: '1 8',
          letter3: 'N',
          number3: '4',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: '366.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Injectable, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the major ',
        manufacturers: 'Ilaprazole Manufacturers in India,',

        extra: ` We provide competitive prices and deals with bulk orders from various customers around the world . Technically we have the most up-to – date manufacturing facilities and our entire production process is in line with regulatory policy.We deliver products from our ready stock to a customer base throughout India at an affordable cost with timely delivery that keeps us competitive in the market.We have a large number of standards in ready stock, which can be delivered immediately with a cost advantage compared to EP/BP and USP Standards. We carefully listen to customers’ concerns and needs of customers, and address each promptly and efficiently.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The mechanism of ilaprazole’s action to suppress gastric acid secretion is almost the same as omeprazole, in which the protonated substituted benzimidazoles suppress gastric acid secretion through inhibition of the H+/K+-ATPase at the secretory surfaces of gastric parietal cells',
      Indication2: [
        {
          point2: 'Gastroesophagal Reflux Disease',
          text1:
            'Ilaprazole is used in the treatment of a reflux disease where acid from the stomach irritates the food pipe (esophagus).',
        },
        {
          point2: 'Dyspepsia',
          text1:
            'Ilaprazole is used to treat dyspepsia, a condition where there is painful, difficult, or disturbed digestion.',
        },
        {
          point2: 'Peptic Ulcer',
          text1:
            'Ilaprazole is used in the treatment of ulcers in the stomach and intestines.',
        },
      ],
    },
    {
      sno: 15,
      id: 'cinitapride-hydrogen-tartrate-api-pellet-manufacturers-in-india',
      productName: 'Cinitapride Hydrogen Tartrate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Gastroprokinetic',
      casNumber: '66564-14-5',
      details: 'Know More',

      name: 'Cinitapride Hydrogen Tartrate API&Pellett',
      image:
        '../../../assets/images/products/cinitapride-hydrogen-tartrate-15.png',
      productName1: 'Cinitapride Hydrogen Tartrate',
      productDescription: {
        Therapeutic: 'Gastroprokinetic',
        CASNumber: '66564-14-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '3 4',
          letter3: 'N',
          number3: '4',
          letter4: 'O',
          number4: '8',
        },
        MolecularWeight: '518.6 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet ,Granule, Powder, Solution',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a ',
        manufacturers:
          ' Cinitapride Hydrogen Tartrate API&Pellet Manufacturers in India.',

        extra: `  We offer various quantities for your requirements as per your need for R&D or Development or Commercial needs. We can also sell its Intermediates with the supporting technical package required for assessment.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        '  is a substituted benzamide with 5-HT receptor antagonist and agonist activity.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        '  is used primarily to treat gastrointestinal disorders associated with motility disorders, such as gastroesophageal reflux disease ( GERD), non-ulcer dyspepsia and impaired gastric emptying.',
    },
    {
      sno: 16,
      id: 'prucalopride-succinate-api-manufacturers-in-india',
      productName: 'Prucalopride Succinate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Gastroprokinetic',
      casNumber: '179474-85-2',
      details: 'Know More',

      name: 'Prucalopride Succinate',
      image: '../../../assets/images/products/Prucalopride-Succinate-16.png',
      productName1: 'Prucalopride Succinate',

      productDescription: {
        Therapeutic: 'Gastroprokinetic',
        CASNumber: '179474-85-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '3 2',
          letter3: 'C l N',
          number3: '3',
          letter4: 'O',
          number4: '7',
        },
        MolecularWeight: '486 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: `, a selective serotonin type 4 (5-HT4) receptor agonist, is a gastrointestinal (GI) prokinetic agent that stimulates colonic peristalsis (high-amplitude propagating contractions [HAPCs]), which increases bowel motility.

        Prucalopride was devoid of effects mediated via 5-HT2A, 5-HT2B, 5-HT3, motilin or CCK-A receptors in vitro at concentrations exceeding 5-HT4 receptor affinity by 150-fold or greater. In isolated GI tissues from various animal species, prucalopride facilitated acetylcholine release to enhance the amplitude of contractions and stimulate peristalsis. In rats and dogs, prucalopride stimulated gastrointestinal motility with contractions starting from the proximal colon to the anal sphincter.
        `,
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is indicated for the treatment of chronic idiopathic constipation (CIC) in adults.',
      Indication3: [
        {
          point3:
            'CIC is one of the most common chronic functional gastrointestinal disorders worldwide. The diagnosis of this agent is very hard and it can be confirmed if the patient experience at least two of the following:',
        },
        {
          point3: '-Straining during more than 25% of the bowel movements.',
        },
        {
          point3: '-Lumpy or hard stools in 25% of the bowel movements.',
        },
        {
          point3:
            '-Sensation of incomplete evacuation in more than 25% of all bowel movements.',
        },
        {
          point3:
            '-Sensation of anorectal blockage or obstruction in more than 25% of the bowel movements.',
        },
        {
          point3:
            '-Manual maneuvers required in more than 25% of the bowel movements.',
        },
        {
          point3: '-Fewer than 3 bowel movements per week.',
        },
      ],
    },
    {
      sno: 17,
      id: 'dapagliflozin-api-manufacturers-in-india',
      productName: 'Dapagliflozin Propanediol Monohydrate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '461432-26-8',
      details: 'Know More',

      name: 'Dapagliflozin',
      image: '../../../assets/images/products/Dapagliflozin-17.png',
      productName1: 'Dapagliflozin',

      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '461432-26-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 1',
          letter2: 'H',
          number2: '2 5',
          letter3: 'C l O',
          number3: '6',
        },
        MolecularWeight: '408.873 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      productName2: 'Dapagliflozin',
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' inhibits the Sodium-glucose cotransporter 2 (SGLT2), expressed in the proximal renal tubules, is responsible for the majority of the reabsorption of filtered glucose from the tubular lumen. Dapagliflozin is an inhibitor of SGLT2. By inhibiting SGLT2, dapagliflozin reduces reabsorption of filtered glucose and lowers the renal threshold for glucose, and thereby increases urinary glucose excretion.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus .It has been studied as monotherapy and in conjunction with oral antidiabetic agents and insulin. Canagliflozin was approved with the same indication. Not for treatment of type 1 diabetes mellitus or diabetic ketoacidosis.',
    },
    {
      sno: 18,
      id: 'saxagliptin-hcl-api-manufacturers-in-india',
      productName: 'Saxagliptin Hcl',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-4.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '709031-78-7',
      details: 'Know More',

      name: 'Saxagliptin Hydrochloride',
      image: '../../../assets/images/products/saxagliptin-hydrochloride-18.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '709031-78-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '2 6',
          letter3: 'C l N',
          number3: '3',
          letter4: 'O',
          number4: '2',
        },
        MolecularWeight: '351.9 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Increased concentrations of the incretin hormones such as glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP) are released into the bloodstream from the small intestine in response to meals. These hormones cause insulin release from the pancreatic beta cells in a glucose-dependent manner but are inactivated by the DPP4 enzyme within minutes. GLP-1 also lowers glucagon secretion from pancreatic alpha cells, reducing hepatic glucose production. In patients with type 2 diabetes, concentrations of GLP-1 are reduced but the insulin response to  GLP-1 is preserved. Saxagliptin is a competitive DPP4 inhibitor that slows the inactivation of the incretin hormones, thereby increasing their bloodstream concentrations and reducing fasting and postprandial glucose concentrations in a glucose-dependent manner in patients with type 2 diabetes mellitus.',

      indication4Titel:
        'ONGLYZA is a dipeptidyl peptidase-4 (DPP4) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus in multiple clinical settings.',
      indication4Sub: 'Limitation of use:',
      Indication4: [
        {
          point4:
            'Should not be used for the treatment of type 1 diabetes mellitus or diabetic ketoacidosis',
        },
        {
          point4:
            'Has not been studied in patients with a history of pancreatitis',
        },
      ],
    },
    {
      sno: 19,
      id: 'teneligliptin-api-manufacturers-in-india',
      productName: 'Teneligliptin HBr',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '906093-29-6',
      details: 'Know More',

      name: 'Teneligliptin',
      image: '../../../assets/images/products/Teneligliptin-19.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '906093-29-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '3 0',
          letter3: 'N',
          number3: '6',
          letter4: 'OS',
        },
        MolecularWeight: ' 426.58 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The mechanism of Teneligliptin is to increase incretin levels (GLP-1 and GIP), which inhibit glucagon release, which in turn increases insulin secretion, decreases gastric emptying, and decreases blood glucose levels',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'Teneligliptin is prescribed for the treatment of type 2 diabetes mellitus (T2DM) in adults along with diet and exercise.Teneligliptin works by increasing the insulin released by the pancreas, and it helps in lowering the blood glucose level in the body.  ',
        },
      ],
    },

    {
      sno: 20,
      id: 'imeglimin-api-manufacturers-in-india-',
      productName: 'Imeglimin Hcl',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '775351-65-0',
      details: 'Know More',

      name: 'Imeglimin',
      image: '../../../assets/images/products/Imeglimin-20.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '775351-65-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '6',
          letter2: 'H',
          number2: '1 3',
          letter3: 'N',
          number3: '5',
        },
        MolecularWeight: '155.2 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Powder,Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a ',
        manufacturers: ' Imeglimin Manufacturers in India.',

        extra: `We offer various quantities for your requirements as per your need for R&D or Development or Commercial needs. We can also sell its Intermediates with the supporting technical package required for assessment`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'AMP activated protein kinase stimulants; Glucose modulators; mitochondrial permeability transition pore inhibitors.',
      companyName: 'Metrochem API Pvt Ltd',

      Indication5: [
        {
          point1:
            ' is an experimental drug being developed as an oral anti-diabetic.[1] It is an oxidative phosphorylation blocker that acts to inhibit hepatic gluconeogenesis, increase muscle glucose uptake, and restore normal insulin secretion.',
        },
      ],
    },
    {
      sno: 21,
      id: 'vildagliptin-api-manufacturers-in-india',
      productName: 'Vildagliptin',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '274901-16-5',
      details: 'Know More',

      name: 'Vildagliptin',
      image: '../../../assets/images/products/Vildagliptin-21.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '274901-16-5 ',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '2 5',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '2',
        },
        MolecularWeight: '303.399 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Injectable, Powder, Solution, Suspension, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Vildagliptin inhibits dipeptidyl peptidase-4 (DPP-4). This in turn inhibits the inactivation of GLP-1 by DPP-4, allowing GLP-1 to potentiate the secretion of insulin in the beta cells. Dipeptidyl peptidase-4’s role in blood glucose regulation is thought to be through degradation of GIP and the degradation of GLP-1.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'This medication is an oral antidiabetic agent, prescribed for type 2 diabetes mellitus along with other medications. It works by increasing the amount of two incretin hormones in the body that are produced naturally by the body in response to food intake.',
        },
      ],
    },
    {
      sno: 22,
      id: 'itraconazole-api-pellet-manufacturers-in-india',
      productName: 'Itraconazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-4.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '84625-61-6',
      details: 'Know More',
      name: 'Itraconazole API&Pellet',
      image: '../../../assets/images/products/Itraconazole-22.png',
      productName1: 'Itraconazole',

      productDescription: {
        Therapeutic: 'Antifungal',
        CASNumber: '84625-61-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 5',
          letter2: 'H',
          number2: '3 8',
          letter3: 'C l',
          number3: '2',
          letter4: 'N',
          number4: '8',
          letter5: 'O',
          number5: '4',
        },
        MolecularWeight: '705.64 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Capsule, Cream,Granule, Injectable, Liquid/Drops,Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' an azole, is an antifungal agent .Itraconazole inhibits the cytochrome P450-dependent synthesis of ergosterol, which is a vital component of fungal cell membranes.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is indicated for the treatment of onychomycosis of the toenail due to Trichophyton rubrum or T. mentagrophytes in non-immunocompromised patients. Prior to initiating treatment, appropriate nail specimens for laboratory testing (KOH preparation, fungal culture, or nail biopsy) should be obtained to confirm the diagnosis of onychomycosis.',
    },
    {
      sno: 23,
      id: 'posaconazole-api-manufacturers-in-india',
      productName: 'Posaconazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '171228-49-2',
      details: 'Know More',
      name: 'Posaconazole',
      image: '../../../assets/images/products/Posaconazole-23.png',
      productName1: 'Posaconazole',
      productDescription: {
        Therapeutic: 'Antifungal',
        CASNumber: '171228-49-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 7',
          letter2: 'H',
          number2: '4 2',
          letter3: 'F',
          number3: '2',
          letter4: 'N',
          number4: '8',
          letter5: 'O',
          number5: '4',
        },
        MolecularWeight: '700.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Injectable, Suspension, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is an azole antifungal agent. Posaconazole blocks the synthesis of ergosterol, a key component of the fungal cell membrane, through the inhibition of cytochrome P-450 dependent enzyme lanosterol 14α-demethylase responsible for the conversion of lanosterol to ergosterol in the fungal cell membrane. This results in an accumulation of methylated sterol precursors and a depletion of ergosterol within the cell membrane thus weakening the structure and function of the fungal cell membrane. This may be responsible for the antifungal activity of posaconazole.',
      indicationTitel: '  is an azole antifungal agent indicated for:',
      Indication2: [
        {
          point2: 'Prophylaxis of Invasive Aspergillus and Candida Infections',
          text1:
            'Noxafil® injection, delayed-release tablets, and oral suspension are indicated for prophylaxis of invasive Aspergillus and Candida infections in patients who are at high risk of developing these infections due to being severely immunocompromised, such as hematopoietic stem cell transplant (HSCT) recipients with graft-versus-host disease (GVHD) or those with hematologic malignancies with prolonged neutropenia from chemotherapy. Noxafil injection is indicated in patients 18 years of age and older. Noxafil delayed-release tablets and oral suspension are indicated in patients 13 years of age and older.',
        },
        {
          point2:
            'Treatment of Oropharyngeal Candidiasis Including Oropharyngeal Candidiasis Refractory to Itraconazole and/or Fluconazole',
          text1:
            'Noxafil oral suspension is indicated for the treatment of oropharyngeal candidiasis, including oropharyngeal candidiasis refractory to itraconazole and/or fluconazole.',
        },
      ],
    },
    {
      sno: 24,
      id: 'oxiconazole-nitrate-api-manufacturers-in-india',
      productName: 'Oxiconazole Nitrate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '64211-46-7',
      details: 'Know More',
      name: 'Oxiconazole Nitrate',
      image: '../../../assets/images/products/oxiconazole-nitrate-24.png',
      productName1: 'Oxiconazole Nitrate',
      productDescription: {
        Therapeutic: 'Antifungal',
        CASNumber: '64211-46-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '1 3',
          letter3: 'C l',
          number3: '4',
          letter4: 'N',
          number4: '3',
          letter5: 'O',
        },
        MolecularWeight: '429.1 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Cream, Liquid/Drops, Lotion, Ointment,Powder, Spray',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Oxiconazole Nitrate inhibits ergosterol biosynthesis, which is required for cytoplasmic membrane integrity of fungi. It acts to destabilize the fungal cyctochrome P450 51 enzyme (also known as Lanosterol 14-alpha demethylase). This is vital in the cell membrance structure of the fungus. Its inhibition leads to cell lysis. Oxiconazole has also been shown in inhibit DNA synthesis and suppress intracellular concentrations of ATP. Like other imidazole antifungals, Oxiconazole can increase membrane permeability to zinc, augmenting its cytotoxicity.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'Cream is indicated for the topical treatment of the following dermal infections: tinea pedis, tinea cruris, and tinea corporis due to Trichophyton rubrum, Trichophyton mentagrophytes, or Epidermophyton floccosum.  Cream is indicated for the topical treatment of tinea (pityriasis) versicolor due to Malassezia furfur (see DOSAGE AND ADMINISTRATION and CLINICAL STUDIES).',
      Indication5: [
        {
          point1:
            '  Cream may be used in pediatric patients for tinea corporis, tinea cruris, tinea pedis, and tinea (pityriasis) versicolor; however, these indications for which Oxiconazole Nitrate Cream has been shown to be effective rarely occur in children below the age of 12.',
        },
      ],
    },
    {
      sno: 25,
      id: 'fosravuconazole-api-manufacturers-in-india',
      productName: 'Fosravuconazole',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '351227-64-0',
      details: 'Know More',
      name: 'Fosravuconazole',
      image: '../../../assets/images/products/Fosravuconazole-25.png',
      productName1: 'Fosravuconazole',
      productDescription: {
        Therapeutic: 'Antifungal',
        CASNumber: '351227-64-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 3',
          letter2: 'H',
          number2: '2 0',
          letter3: 'F',
          number3: '2',
          letter4: 'N',
          number4: '5',
          letter5: 'O',
          number5: '5',
          letter6: 'P S',
        },
        MolecularWeight: '547.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: '14-alpha demethylase inhibitors',
      indicationTitel:
        'is a triazole antifungal agent.In Japan, it is approved for the treatment of onychomycosis, a fungal infection of the nail.It is a prodrug that is  converted into ravuconazole.',
    },
    {
      sno: 26,
      id: 'sulconazole-nitrate-api-manufacturers-in-india',
      productName: 'Sulconazole Nitrate',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '61318-90-9',
      details: 'Know More',

      name: 'Sulconazole Nitrate',
      image: '../../../assets/images/products/Sulconazole-26.png',
      productName2: 'Sulconazole Nitrate',
      productDescription: {
        Therapeutic: 'Antifungal',
        CASNumber: '61318-91-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '1 5',
          letter3: 'C l',
          number3: '3',
          letter4: 'N',
          number4: '2',
          letter5: 'S.HNO',
          number5: '3',
        },
        MolecularWeight: '460.8g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Wishlist',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction1:
        'Substituted imidazole derivative which inhibits metabolic reactions necessary for the synthesis of ergosterol, an essential membrane component. The end result is usually fungistatic; however, sulconazole may act as a fungicide in Candida albicans and Candida parapsilosis during certain growth phases.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel1:
        'SOLUTION, 1.0% is a broad-spectrum antifungal agent indicated for the treatment of tinea cruris and tinea corporis caused by Trichophyton rubrum, Trichophyton mentagrophytes, Epidermophyton floccosum, and Microsporum canis; and for the treatment of tinea versicolor. Effectiveness has not been proven in tinea pedis (athlete’s foot). Symptomatic relief usually occurs within a few days after starting EXELDERM SOLUTION and clinical improvement usually occurs within one week.',
    },
    {
      sno: 27,
      id: 'clopidogrel-bisulphate-api-pellet-manufacturers-in-india',
      productName: 'Clopidogrel Bisulphate (form I & II)',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiplatelet',
      casNumber: '120202-66-6',
      details: 'Know More',

      name: 'Clopidogrel Bisulphate API&Pellet',
      image: '../../../assets/images/products/Clopidogrel-Bisulfate-27.pngg',
      productName1: 'Clopidogrel Bisulphate ',

      productDescription: {
        Therapeutic: 'Antithrombotic / Anticoagulant',
        CASNumber: '120202-66-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 6',
          letter2: 'H',
          number2: '1 8',
          letter3: 'C l N O',
          number3: '6',
          letter4: 'S',
          number4: '2',
        },
        MolecularWeight: '419.9 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet,Capsule',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'one of the major ',
        manufacturers:
          '  Clopidogrel Bisulphate API and Pellet Manufacturers in India.',

        extra: `We are emerging as India’s leading manufactures of APIs, Intermediates, pellets delivering quality pharmaceutical products. Despite a high customer retention rate, we are well reputed for the best products in the industry.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a prodrug, one of whose metabolites is an inhibitor of platelet aggregation. A variety of drugs that inhibit platelet function have been shown to decrease morbid events in people with established cardiovascular atherosclerotic disease as evidenced by stroke or transient ischemic attacks, myocardial infarction, unstable angina or the need for vascular bypass or angioplasty. This indicates that platelets participate in the initiation and/or evolution of these events and that inhibiting platelet function can reduce the event rate.',
      mechanismofAction2:
        'Clopidogrel must be metabolized by CYP450 enzymes to produce the active metabolite that inhibits platelet aggregation. The active metabolite of clopidogrel selectively inhibits the binding of adenosine diphosphate (ADP) to its platelet P2Y12 receptor and the subsequent ADPmediated activation of the glycoprotein GPIIb/IIIa complex, thereby inhibiting platelet aggregation. This action is irreversible. Consequently, platelets exposed to clopidogrel’s active metabolite are affected for the remainder of their lifespan (about 7 to 10 days). Platelet aggregation induced by agonists other than ADP is also inhibited by blocking the amplification of platelet activation by released ADP.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is indicated for the reduction of atherothrombotic events as follows: • Recent MI, Recent Stroke or Established Peripheral Arterial Disease For patients with a history of recent myocardial infarction (MI), recent stroke, or established peripheral arterial disease, Plavix has been shown to reduce the rate of a combined endpoint of new ischemic stroke (fatal or not), new MI (fatal or not), and other vascular death. • Acute Coronary Syndrome -For patients with non-ST-segment elevation acute coronary syndrome (unstable angina/nonQ-wave MI) including patients who are to be managed medically and those who are to be managed with percutaneous coronary intervention (with or without stent) or CABG, Plavix has been shown to decrease the rate of a combined endpoint of cardiovascular death, MI, or stroke as well as the rate of a combined endpoint of cardiovascular death, MI, stroke, or refractory ischemia. -For patients with ST-segment elevation acute myocardial infarction, Plavix has been shown to reduce the rate of death from any cause and the rate of a combined endpoint of death, reinfarction or stroke. This benefit is not known to pertain to patients who receive primary angioplasty.',
    },
    {
      sno: 28,
      id: 'levocetirizine-di-hcl-api-manufacturers-in-india',
      productName: 'Levocetirizine Di Hcl',

      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '130018-87-0',
      details: 'Know More',

      name: 'Levocetirizine Dihydrocholride',
      image:
        '../../../assets/images/products/Levocetirizine-Dihydrochloride-28.png',
      productName1: 'Levocetirizine',

      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '130018-87-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 1',
          letter2: 'H',
          number2: '2 6',
          letter3: 'C l',
          number3: '2',
          letter4: 'N',
          number4: '2',
          letter5: 'O',
          number5: '3',
        },
        MolecularWeight: '388.9 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet ,Powder, Solution, Suspension',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Levocetirizine, the active enantiomer of cetirizine, is an antihistamine; its principal effects are mediated via selective inhibition of H1 receptors. The antihistaminic activity of levocetirizine has been documented in a variety of animal and human models. In vitro binding studies revealed that levocetirizine has an affinity for the human H1-receptor 2-fold higher than that of cetirizine (Ki = 3 nmol/L vs. 6 nmol/L, respectively). The clinical relevance of this finding is unknown.',
      indicationTitel: '  is a histamine H1-receptor antagonist indicated for:',
      Indication2: [
        {
          point2: '1.Allergic Rhinitis',
          text1:
            'Levocetirizine is indicated for the relief of symptoms associated with allergic rhinitis (seasonal and perennial) in adults and children 6 years of age and older.',
        },
        {
          point2: '2.Chronic Idiopathic Urticaria',
          text1:
            'Levocetirizine is indicated for the treatment of the uncomplicated skin manifestations of chronic idiopathic urticaria in adults and children 6 years of age and older.',
        },
      ],
    },
    {
      sno: 29,
      id: 'bepotastine-besilate-api-manufacturers-in-india',
      productName: 'Bepotastine Besilate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '190786-44-8',
      details: 'Know More',

      name: 'Bepotastine Besilate',
      image: '../../../assets/images/products/bepotastine-besilate-29.png',
      productName1: 'Bepotastine Besilate',
      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '190786-44-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 7',
          letter2: 'H',
          number2: '3 1',
          letter3: 'C l N',
          number3: '2',
          letter4: 'O',
          number4: '6',
          letter5: 'S',
        },
        MolecularWeight: '547.1 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet , Liquid/Drops',
        MetrochemDevelopmentStatus: 'Under Development',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is India’s one of the leading',
        manufacturers: 'Bepotastine Besilate API Manufacturer in India.',

        extra: `We have a quality focused process and highly dedicated people to ensure our products are safe and reliable.We understand our responsibility to deliver pharmaceutical products of high quality, and to ensure high customer satisfaction.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a topically active, direct H1­ receptor antagonist and an inhibitor of the release of histamine from mast cells.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'ophthalmic solution 1.5% is a histamine H1 receptor antagonist indicated for the treatment of itching associated with signs and symptoms of allergic conjunctivitis.',
      Indication3: [
        {
          point3:
            'It works by preventing the effects of certain inflammatory substances that cells in your eyes create and that often triggers allergic reaction.',
        },
      ],
    },
    {
      sno: 30,
      id: 'antazoline-phosphate-api-manufacturer-in-india',
      productName: 'Antazoline phosphate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '154-68-7',
      details: 'Know More',

      name: 'Antazoline Phosphate',
      image: '../../../assets/images/products/antazoline-phosphate-30.png',
      productName1: 'Antazoline phosphate',
      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '154-68-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '2 2',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '4',
          letter5: 'P',
        },
        MolecularWeight: '363.3 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet,Injectable,Liquid/Drops',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1:
          'is popular for manufacturing a number of pharmaceutical products along with ',
        manufacturers: 'Antazoline Phosphate API Manufacturer in india.',

        extra: `We are a prominent global exporter and supplier of our products and services. Our products on offer are mostly appreciated in the industry for their reliability and reasonable cost.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'binds to the histamine H1 receptor. This blocks the action of endogenous histamine, which subsequently leads to temporary relief of the negative symptoms brought on by histamine.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'used to relieve nasal congestion. It is also formulated as eye drops with naphazoline to relieve allergic conjunctivitis. it helps to relieve allergic itchyness by blocking the release of a chemical called histamine that is produced by the body as part of an allergic reaction.',
    },
    {
      sno: 31,
      id: 'antazoline-hydrochloride-api-manufacturer-in-india',
      productName: 'Antazoline Hydrochloride',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '2508-72-7',
      details: 'Know More',

      name: 'Antazoline Hydrochloride',
      image: '../../../assets/images/products/antazoline-hcl-31.png',
      productName3: 'Antazoline Hydrochloride',
      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '2508-72-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '2 0',
          letter3: 'C l N',
          number3: '3',
        },
        MolecularWeight: '301.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet, Injectable, Liquid/Drops',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the fast-emerging',
        manufacturers: 'Antazoline Hydrochloride Manufacturer in India.',

        extra: `We are having technically the most advanced production facilities and our entire manufacturing process is as per regulatory policies. We understand our responsibility to deliver high quality pharmaceutical products and to ensure high customer satisfaction. Our Continuous process improvement for cost reduction to ensure long-term sustainability to various businesses.`,
      },

      companyName: 'Metrochem API Pvt Ltd',

      Indication6: [
        {
          point1:
            ' is used to treat allergic conjunctivitis, antazoline can be combined in a solution with tetryzoline. It used to soothe nasal congestion. It’s also formulated to relieve allergic conjunctivitis as eye drops with naphazoline. it helps to relieve allergic itchyness by blocking the release of a chemical called histamine that is produced by the body as part of an allergic reaction.',
        },
      ],
    },
    {
      sno: 32,
      id: 'dimetindene-maleate-api-manufacturers-in-india',
      productName: 'Dimetindene maleate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '3614-69-5',
      details: 'Know More',

      name: 'Dimetindene Maleate',
      image: '../../../assets/images/products/dimethindene-maleate-32.png',
      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '3614-69-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 4',
          letter2: 'H',
          number2: '2 8',
          letter3: 'N',
          number3: '2',
          letter4: 'O',
          number4: '4',
        },
        MolecularWeight: '408.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet,Capsule, Gel, Injectable, Liquid/Drops',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the ',
        manufacturers: 'Dimetindene Maleate Manufacturers in India,',

        extra: `providing affordable prices and handling bulk orders from various customers around the world.We have the latest technology and experienced pharmaceutical manufacturers, and all regulatory services and compliance sectors including raw materials, active pharmaceutical ingredients developed using finished formulations and purification technologies.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Dimethindene maleate selectively blocks the histamine receptors (H1) present in the brain and peripheral tissues. Selective H1 receptor blockage results in allergic reactions activation. Dimethindene maleate has moderate serotonin antagonist activity and antimuscarinic activity.',

      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'Fenistil drug, is recommended for the treatment of allergic conjunctivitis, eye allergies, allergic dermatitis, rhinitis, urticaria, angioedema and pruritus.',
        },
      ],
    },
    {
      sno: 33,
      id: 'bilastine-api-manufacturers-in-india',
      productName: 'Bilastine',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihistamine',
      casNumber: '202189-78-4',
      details: 'Know More',

      name: 'Bilastine',
      image: '../../../assets/images/products/Bilastine-33.png',
      productDescription: {
        Therapeutic: 'Antihistamine',
        CASNumber: '2069238-47-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 8',
          letter2: 'H',
          number2: '3 7',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '3',
        },
        MolecularWeight: '463.6 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet ,Solution',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the major ',
        manufacturers: 'Bilastine Manufacturers in India.',

        extra: `he R&D and Manufacturing facilities are built according to high quality standards.We are dedicated to the development and manufacture of quality pharmaceutical products that exceed customer satisfaction by improving processes continuously.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Bilastine is a selective histamine H1 receptor antagonist (Ki = 64nM). During allergic response mast cells undergo degranulation which releases histamine and other subastances. By binding to and preventing activation of the H1 receptor, bilastine reduces the development of allergic symptoms due to the release of histamine from mast cells.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'ILAXTEN contains the active substance bilastine which is an antihistamine. ILAXTEN is used to relieve the symptoms of hayfever (sneezing, itchy, runny, blocked-up nose and red and watery eyes) and other forms of allergic rhinitis. It may also be used to treat itchy skin rashes (hives or urticaria).',
        },
      ],
    },
    {
      sno: 34,
      id: 'ozenoxacin-api-manufacturers-in-india',
      productName: 'Ozenoxacin',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antibiotic',
      casNumber: '245765-41-7',
      details: 'Know More',

      name: 'Ozenoxacin',
      image: '../../../assets/images/products/Ozenoxacin-34.png',
      productName1: 'Ozenoxacin',
      productDescription: {
        Therapeutic: 'Antibiotic',
        CASNumber: '245765-41-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 1',
          letter2: 'H',
          number2: '2 1',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '3',
        },
        MolecularWeight: '363.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Cream, Lotion',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: `
         is an antimicrobial drug. Ozenoxacin is a quinolone antimicrobial drug. The mechanism of action involves the inhibition of bacterial DNA replication enzymes, DNA gyrase A and topoisomerase IV. Ozenoxacin has been shown to be bactericidal against S. aureus and S. pyogenes organisms.


        `,
      MechanismOfAction2:
        '    The mechanism of quinolone resistance can arise through mutations of one or more of the genes that encode DNA gyrase or topoisomerase IV. Resistant organisms will typically carry a combination of mutations within gyrA and parC subunits. Overall the frequency of resistant mutants selected by ozenoxacin is ≤10-10 .',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is indicated for the topical treatment of impetigo due to Staphylococcus aureus or Streptococcus pyogenes in adult and pediatric patients 2 months of age and older. Ozenoxacin is found to be effective against certain bacteria which are resistant to currently used quinolones or fluoroquinolones antimicrobial agents.',
    },
    {
      sno: 35,
      id: 'tedizolid-phosphate-api-manufacturers-in-india',
      productName: 'Tedizolid Phosphate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antibiotic',
      casNumber: '856867-55-5',
      details: 'Know More',

      name: 'Tedizolid Phosphate',
      image: '../../../assets/images/products/Tedizolid-Phosphate-35.png',
      productName1: 'Tedizolid Phosphate',
      productDescription: {
        Therapeutic: 'Antibiotic',
        CASNumber: '856867-55-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '1 5',
          letter3: 'F N',
          number3: '6',
          letter4: 'O',
          number4: '3',
        },
        MolecularWeight: '450.3 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Injectable, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is the prodrug of tedizolid, an antibacterial agent.The antibacterial activity of tedizolid is mediated by binding to the 50S subunit of the bacterial ribosome resulting in inhibition of protein synthesis. Tedizolid inhibits bacterial protein synthesis through a mechanism of action different from that of other non-oxazolidinone class antibacterial drugs; therefore, cross-resistance between tedizolid and other classes of antibacterial drugs is unlike',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is an oxazolidinone-class antibacterial drug indicated in adults for the treatment of acute bacterial skin and skin structure infections (ABSSSI) caused by designated susceptible bacteria. (1) To reduce the development of drug-resistant bacteria and maintain the effectiveness of SIVEXTRO and other antibacterial drugs, SIVEXTRO should be used only to treat or prevent infections that are proven or strongly suspected to be caused by bacteria.',
    },
    {
      sno: 36,
      id: 'fosfomycin-tromethamine-api-manufacturers-in-india',
      productName: 'Fosfomycin Trometamol',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antibiotic',
      casNumber: '78964-85-9',
      details: 'Know More',

      name: 'Fosfomycin Tromethamine',
      image: '../../../assets/images/products/Fosfomycin-Tromethamine-36.png',
      productName1: 'Fosfomycin Trometamol',
      productDescription: {
        Therapeutic: 'Antibacterial',
        CASNumber: '78964-85-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '7',
          letter2: 'H',
          number2: '1 8',
          letter3: 'N O',
          number3: '7',
          letter4: 'P',
        },
        MolecularWeight: '259.19 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Capsule, Granule, Injectable, Powder, Suspension',
        MetrochemDevelopmentStatus: 'Pipeline',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the leading',
        manufacturers: 'Fosfomycin Tromethamine Manufacturers in India.',

        extra: `We are specialize in the developing innovative methods for synthesizing a wide range of products. We also undertake custom synthesis and contract manufacturing. We achieve this by partnering with our customers and supporting them in meeting their goals in terms of quality, time and cost objectives.In the highly competitive pharmaceutical sector,we have made our presence known by offering customers the best quality, cost-competitive products with a short development period.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' is a phosphoenolpyruvate analogue produced by Streptomyces that irreversibly inhibits enolpyruvate transferase (MurA), which prevents the formation of N-acetylmuramic acid, an essential element of the peptidoglycan cell wall.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is an antibiotic used to treat bladder infections (such as acute cystitis or lower urinary tract infections) in women. It functions by preventing growth of bacteria. It should not be used to treat infections outside the bladder (e.g., kidney infections such as pyelonephritis or perinephric abscesses).Using any antibiotics when it is not required will cause potential infections to fail. Fosfomycin Tromethamine, white or almost white crystalline powder; odorless, salty taste; very water-soluble, dissolved in methanol, soluble in ethanol, insoluble in chloroform.',
    },
    {
      sno: 37,
      id: 'garenoxacin-mesylate-api-manufacturers-in-india',
      productName: 'Garenoxacin Mesylate',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antibiotic',
      casNumber: '223652-90-2',
      details: 'Know More',

      name: 'Garenoxacin Mesylate',
      image: '../../../assets/images/products/Omeprazole-1.png',
      productName4: 'Garenoxacin ',
      productDescription: {
        Therapeutic: 'Antibiotic',
        CASNumber: '223652-82-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 4',
          letter2: 'H',
          number2: '2 6',
          letter3: 'F',
          number4: '2',
          letter5: 'N',
          number5: '2',
          letter6: 'O',
          number62: '8',
          letter7: 'S',
        },
        MolecularWeight: ' 522.5 g/mol ',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction4:
        ' acts on DNA gyrase and DNA topoisomerase IV to inhibit the transcription and replication of DNA like conventional Fluoroquinolones. However, Garenoxacin demonstrates unique Structure-Activity Relationship to offer one of the lowest MICs against respiratory pathogens with low potential for resistance development. The complimentary presence of bulky side chains of Difluoromethoxy and Methylisoindolinyl groups increases the spectrum of activity while preventing ‘Efflux’ that is so important for prevention of resistance development.',
      companyName: 'Metrochem API Pvt Ltd',
      indication4Titel:
        'This medication is a quinolone antibiotic, prescribed for chronic bronchitis, sinusitis, pneumonia, intra-abdominal infections and others.  It blocks the action of enzymes that are necessary for the bacteria to make DNA.',
    },
    {
      sno: 38,
      id: 'dexketoprofen-trometamol-api-manufacturers-in-india',
      productName: 'Dexketoprofen Trometamol',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Analgesic',
      casNumber: '156604-79-4',
      details: 'Know More',

      name: 'Dexketoprofen Trometamo',
      image: '../../../assets/images/products/dexketoprofen-trometamol-38.png',
      productName5: 'Dexketoprofen Trometamol',
      productDescription: {
        Therapeutic: 'Analgesic',
        CASNumber: '156604-79-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 0',
          letter2: 'H',
          number2: '2 5',
          letter3: 'N O',
          number3: '6',
        },
        MolecularWeight: '375.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet , Capsule,Liquid/Drops, Powder, Solution',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the most reputed and reliable',
        manufacturers: 'Dexketoprofen Trometamol Manufacturers in India.',

        extra: `We have a quality driven process and we are strongly dedicated to ensuring our products are safe and reliable.Our professional team is talented, experienced and working in coordination to achieve the company’s goal.With the support of our talented team, we are committed to delivering good quality products to the market in bulk.The products that we manufacture are exported to regulated markets and consistently pass through all the specifications of our international buyers in terms of Stability, Particle Size Distribution,Impurity profile and consistency in supply.We offers products at a very competitive price/cost.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The primary mechanism of action of these drugs is believed to be the inhibition of enzymes of the cyclo-oxygenase (COX) family, which are involved in the biosynthesis of prostaglandins. Ketoprofen is a member of the arylpropionate group of NSAIDs, and has well established analgesic and anti-inflammatory effects.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel: '',
      Indication7: [
        {
          point1:
            ' (Dexketoprofen Rowex) is widely used in pain killers from the group of medicines called non-steroidal anti-inflammatory drugs (NSAIDs). It is used to treat mild to moderate pain, such as muscle pain, dysmenorrhea, and toothache. ',
        },
      ],
    },
    {
      sno: 39,
      id: 'etoricoxib-api-manufacturers-in-india',
      productName: 'Etoricoxib',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Analgesic',
      casNumber: '202409-33-4',
      details: 'Know More',

      name: 'Etoricoxib',
      image: '../../../assets/images/products/etoricoxib-39.png',
      productName2: 'Etoricoxib',
      productDescription: {
        Therapeutic: 'Analgesic',
        CASNumber: ' 202409-33-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '1 5',
          letter3: 'C l N',
          number3: '2',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: '358.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet , Capsule, Gel, Injectable',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the largest',
        manufacturers: 'Etoricoxib Manufacturers in India.',

        extra: `Metrochem supplies innovative & Quality formulations to our customers at market-attainable prices.We offer a wide range of active pharmaceutical ingredients. In addition to this, We are also counted among the world’s most well-known API suppliers. The active pharmaceutical ingredients which we offer are used to treat different diseases.Our active pharma ingredients, in terms of quality and prompt delivery, are accessible at the most reasonable prices.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Like any other COX-2 selective inhibitor Etoricoxib selectively inhibits isoform 2 of cyclo-oxigenase enzyme (COX-2), preventing production of prostaglandins (PGs) from arachidonic acid.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel1:
        ', also known as Arcoxia, is a non-steroidal anti-inflammatory drug (NSAID) that is used to treat psoriatic arthritis, osteoarthritis, and rheumatoid arthritis. This drug relieves people suffering from acute pain, chronic musculoskeletal pain and prevents acute gouty arthritis and ankylosing spondylitis.It belongs to cyclooxygenase-2 (COX-2) specific inhibitors class of medicines which decrease pain and inflammation by blocking the pain causing enzymes (COX-2) in the body. This drug is only used when its alternative medicinal products have not helped with treatment.',
    },
    {
      sno: 40,
      id: 'loxoprofen-sodium-api-manufacturers-in-india',
      productName: 'Loxoprofen Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-4.png',
      therapeuticCategory: 'Analgesic',
      casNumber: '226721-96-6',
      details: 'Know More',

      name: 'Loxoprofen Sodium',
      image: '../../../assets/images/products/Loxoprofen-Sodium-40.png',
      productName1: 'Loxoprofen',
      productDescription: {
        Therapeutic: 'Analgestic',
        CASNumber: '68767-14-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 5',
          letter2: 'H',
          number2: '1 7',
          letter3: 'N a O',
          number3: '3',
        },
        MolecularWeight: '268.28 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule,Gel, Grnule,Solution, Spray, Tablet',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: `
         itself is a prodrug and carries little-to-no pharmacological activity – it is rapidly metabolized to its trans-alcohol form, which is a potent and non-selective inhibitor of cyclooxygenase.Cyclooxygenase (COX) is present in 2 forms, COX-1 and COX-2, with each serving different functions. COX-1 is present in human cells and is constitutively released, performing cellular housekeeping functions such as mucus production and platelet aggregation.COX-2 is induced in human cells post-injury or due to other stimuli, is triggered to appear in large quantities at the sites of injury/stimuli, and is ultimately responsible for the mediation of inflammation and pain.

        `,
      MechanismOfAction2:
        'Loxoprofen’s active metabolite inhibits both COX isoforms, resulting in reduced expression of several mediators of pain, inflammation, and fever (e.g. prostaglandins, prostacyclin, thromboxane, etc).',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is non-steroidal anti-inflammatory medication (NSAID) indicated for pain and inflammation related to musculoskeletal and joint disorders.In addition to its effects on pain, it is an antipyretic and anti-inflammatory medication.',
    },
    {
      sno: 41,
      id: 'montelukast-sodium-api-manufacturers-in-india',
      productName: 'Montelukast Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-4.png',
      CEP: '../../../assets/images/logo/web-icons-4.png',
      therapeuticCategory: 'Antiasthmatic',
      casNumber: '151767-02-1',
      details: 'Know More',

      name: 'Montelukast Sodium',
      image: '../../../assets/images/products/Montelukast-Sodium-41.png',
      productName1: 'Montelukast Sodium',
      productDescription: {
        Therapeutic: 'Antiasthmatic',
        CASNumber: '151767-02-1',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 5',
          letter3: 'H',
          number3: '3 5',
          letter4: 'C l N N a O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '608.2 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Powder, Suspension, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' (empirical formula C35H35ClNNaO3S) is a highly selective leukotriene receptor antagonist that binds with high affinity to the  cysteinyl leukotrienes (LTC4, LTD4, LTE4) are products of arachidonic acid metabolism and are released from various cells, including mast cells and eosinophils. These eicosanoids bind to cysteinyl leukotriene (CysLT) receptors. The CysLT type-1 (CysLT1) receptor is found in the human airway (including airway smooth muscle cells and airway macrophages) and on other pro-inflammatory cells (including eosinophils and certain myeloid stem cells). CysLTs have been correlated with the pathophysiology of asthma and allergic rhinitis. In asthma, leukotriene-mediated effects include airway edema, smooth muscle contraction, and altered cellular activity associated with the inflammatory process. In allergic rhinitis, CysLTs are released from the nasal mucosa after allergen exposure during both earlyand late-phase reactions and are associated with symptoms of allergic rhinitis. Montelukast is an orally active compound that binds with high affinity and selectivity to the CysLT1 receptor (in preference to other pharmacologically important airway receptors, such as the prostanoid, cholinergic, or b-adrenergic receptor). Montelukast inhibits physiologic actions of LTD4 at the CysLT1 receptor without any agonist activity..',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel: '  is a leukotriene receptor antagonist indicated for:',
      Indication: [
        {
          point1:
            'Prophylaxis and chronic treatment of asthma in patients 12 months of age and older.',
        },
        {
          point1:
            'Acute prevention of exercise-induced bronchoconstriction (EIB) in patients 6 years of age and older.',
        },
        {
          point1:
            'Relief of symptoms of allergic rhinitis (AR): seasonal allergic rhinitis (SAR) in patients 2 years of age and older, and perennial allergic rhinitis (PAR) in patients 6 months of age and older.',
        },
      ],
    },
    {
      sno: 42,
      id: 'tofacitinib-citrate-api-manufacturers-in-india',
      productName: 'Tofacitinib Citrate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antirheumatic',
      casNumber: '540737-29-9',
      details: 'Know More',

      name: 'Tofacitinib Citrate',
      image: '../../../assets/images/products/Tofacitinib-Citrate-42.png',
      productName4: 'Tofacitinib ',
      productDescription: {
        Therapeutic: 'Antirheumatic',
        CASNumber: '540737-29-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '2 8',
          letter3: 'N',
          number3: '6',
          letter4: 'O',
          number4: '8',
        },
        MolecularWeight: '504.5 g/mol',
        MeshSize: 'As per Customer Requirementl',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction4:
        ' is a Janus kinase (JAK) inhibitor. JAKs are intracellular enzymes which transmit signals arising from cytokine or growth factor-receptor interactions on the cellular membrane to influence cellular processes of haematopoiesis and immune cell function. Within the signalling pathway, JAKs phosphorylate and activate Signal Transducers and Activators of Transcription (STATs) which modulate intracellular activity including gene expression. Tofacitinib modulates the signalling pathway at the point of JAKs, preventing the phosphorylation and activation of STATs. JAK enzymes transmit cytokine signalling through pairing of JAKs (e.g., JAK1/JAK3, JAK1/JAK2, JAK1/TyK2, JAK2/JAK2). Tofacitinib inhibited the in vitro activities of JAK1/JAK2, JAK1/JAK3, and JAK2/JAK2 combinations with IC50 of 406, 56, and 1377 nM, respectively. However, the relevance of specific JAK combinations to therapeutic effectiveness is not known.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel1: 'XELJANZ/XELJANZ XR is a Janus kinase (JAK) inhibitor.',
      Indication8: [
        {
          text1:
            'Rheumatoid Arthritis: XELJANZ/XELJANZ XR is indicated for the treatment of adult patients with moderately to severely active rheumatoid arthritis who have had an inadequate response or intolerance to methotrexate. It may be used as monotherapy or in combination with methotrexate or other no biologic disease-modifying antirheumatic drugs (DMARDs).',
          point1:
            'Limitations of Use: Use of XELJANZ/XELJANZ XR in combination with biologic DMARDs or potent immunosuppressant’s such as azathioprine and cyclosporine is not recommended.',
        },
        {
          text1:
            'Psoriatic Arthritis: XELJANZ/XELJANZ XR is indicated for the treatment of adult patients with active psoriatic arthritis who have had an inadequate response or intolerance to methotrexate or other disease-modifying antirheumatic drugs (DMARDs).',
          point1:
            'Limitations of Use: Use of XELJANZ/XELJANZ XR in combination with biologic DMARDs or potent immunosuppressant’s such as azathioprine and cyclosporine is not recommended.',
        },
        {
          text1:
            'Ulcerative Colitis: XELJANZ is indicated for the treatment of adult patients with moderately to severely active ulcerative colitis (UC).',
          point1:
            'Limitations of Use: Use of XELJANZ in combination with biological therapies for UC or with potent immunosuppressant’s such as azathioprine and cyclosporine is not recommended.',
        },
      ],
    },
    {
      sno: 43,
      id: 'lurasidone-hcl-api-manufacturers-in-india',
      productName: 'Lurasidone Hcl',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antipsychotic',
      casNumber: '367514-88-3',
      details: 'Know More',

      name: 'Lurasidone Hychloride',
      image: '../../../assets/images/products/Lurasidone-Hydrochloride-43.png',
      productName5: 'Lurasidone Hychloride',
      productDescription: {
        Therapeutic: 'Antipsychotic',
        CASNumber: '367514-88-3',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 8',
          letter2: 'H',
          number2: '3 6',
          letter3: 'N',
          number3: '4',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: '492.676 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfActiontext: 'The mechanism of action of',
      MechanismOfAction5:
        '  in the treatment of schizophrenia and bipolar depression is unknown. However, its efficacy in schizophrenia and bipolar depression could be mediated through a combination of central dopamine Type 2 (D2) and serotonin Type 2 (5HT2A) receptor antagonism.',
      indicationTitel:
        'Lurasidone Hychloride is an atypical antipsychotic for the treatment of:',
      Indication2: [
        {
          point2: 'Schizophrenia',
          text1:
            'The efficacy of Lurasidone Hcl in schizophrenia was established in five 6-week controlled studies of adult patients with schizophrenia.',
        },
        {
          point2: 'Depressive Episodes associated with Bipolar I Disorder',
          text1:
            'Lurasidone Hcl  is indicated as monotherapy for the treatment of patients with major depressive episodes associated with bipolar I disorder (bipolar depression). The efficacy of LATUDA was established in a 6-week monotherapy study in adult patients with bipolar depression.',
        },
      ],
    },
    {
      sno: 44,
      id: 'azilsartan-medoxomil-potassium-api-manufacturers-in-india',
      productName: 'Azilsartan Medoxomil Potassium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihypertensive',
      casNumber: '86303-24-7',
      details: 'Know More',

      name: 'Azilsartan Medoxomil Potassium',
      image: '../../../assets/images/products/Apixaban-44.png',
      productName1: 'Azilsartan Medoxomil Potassium',
      productDescription: {
        Therapeutic: 'Antihypertensive’s',
        CASNumber: '86303-24-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 0',
          letter2: 'H',
          number2: '2 3',
          letter3: 'K N',
          number3: '4',
          letter4: 'O',
          number4: '8',
        },
        MolecularWeight: '606.6 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the well-known',
        manufacturers:
          'Azilsartan medoxomil Potassium API manufacturer in India.',

        extra: `Our products laboratory tested and meets the international standards for identity, purity and composition. Azilsartan medoxomil API is widely appreciated by our most valued clients across the worldwide.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' blocks the angiotensin II type 1 receptor preventing angiotensin II from binding and causing vasoconstriction. Azilsartan’s ability to remain tightly bound to AT1 receptors for very long periods after drug washout is among its most unusual features.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. Azilsartan belongs to a class of drugs called angiotensin receptor blockers (ARBs). It works by relaxing blood vessels so that blood can flow more easily.',
      productName6: 'EDARBI',
      Indication9: [
        {
          point2:
            ' is an angiotensin II receptor blocker (ARB) and EDARBYCLOR is an angiotensin II receptor blocker (ARB) and a thiazide like diuretic combination product both indicated for the treatment of hypertension to lower blood pressure. Edarbi prevents narrowing of the blood vessels which lowers blood pressure and improves blood flow. Edarbi (hypertension) is used to treat elevated blood pressure.',
        },
      ],
    },
    {
      sno: 45,
      id: 'nicardipine-api-manufacturer-in-india',
      productName: 'Nicardipine',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihypertensive',
      casNumber: '55985-32-5',
      details: 'Know More',

      name: 'Nicardipine',
      image: '../../../assets/images/products/Nicardipine.-45.png',
      productDescription: {
        Therapeutic: 'Antihypertensive',
        CASNumber: '55985-32-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 6',
          letter2: 'H',
          number2: '2 9',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '6',
        },
        MolecularWeight: '479.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Injectable, Solution,',
        MetrochemDevelopmentStatus: 'Pipeline',
        companyName4: 'Metrochem API Pvt Ltd',
        text1:
          'is popular for manufacturing a number of pharmaceutical products along with',
        manufacturers: 'Antazoline Phosphate API Manufacturer in india.',

        extra: `We are a prominent global exporter and supplier of our products and services. Our products on offer are mostly appreciated in the industry for their reliability and reasonable cost.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Nicardipine inhibits the transmembrane influx of calcium ions into cardiac muscle and smooth muscle without changing serum calcium concentrations. The contractile processes of cardiac muscle and vascular smooth muscle are dependent upon the movement of extracellular calcium ions into these cells through specific ion channels. The effects of nicardipine are more selective to vascular smooth muscle than cardiac muscle. In animal models, nicardipine produced relaxation of coronary vascular smooth muscle at drug levels which cause little or no negative inotropic effect.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication: [
        {
          point1:
            'Cardene I.V. Premixed Injection is a calcium channel blocker indicated for the short-term treatment of hypertension when oral therapy is not feasible.',
        },
      ],
    },
    {
      sno: 46,
      id: 'febuxostat-api-manufacturers-in-india',
      productName: 'Febuxostat',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihyperuricemia(Gout)',
      casNumber: '144060-53-7',
      details: 'Know More',

      name: 'Febuxostat',
      image: '../../../assets/images/products/Febuxostat-46.png',
      productName1: 'Febuxostat',
      productDescription: {
        Therapeutic: 'Antihyperuricemia(Gout)',
        CASNumber: '144060-53-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 6',
          letter2: 'H',
          number2: '1 6',
          letter3: 'N',
          number3: '2',
          letter4: 'O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '316.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet , Capsule',
        MetrochemDevelopmentStatus: 'Commercial',

        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a fastest growing',
        manufacturers: 'Febuxostat Manufacturers in India.',

        extra: `We supply products from our ready stock to a customer base across worldwide at an affordable cost with timely delivery that keeps us competitive on the market.t works by decreasing the amount of uric acid that is made in the body. Febuxostat is used to prevent gout attacks but not to treat them once they occur.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ', a xanthine oxidase inhibitor, achieves its therapeutic effect by decreasing serum uric acid. Febuxostat is not expected to inhibit other enzymes involved in purine and pyrimidine synthesis and metabolism at therapeutic concentrations.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is a xanthine oxidase (XO) inhibitor indicated for the chronic management of hyperuricemia in patients with gout.',
      Indication3: [
        {
          point3:
            '“Febuxostat is in a class of medications called xanthine oxidase inhibitors. It works by decreasing the amount of uric acid that is made in the body. Febuxostat is used to prevent gout attacks but not to treat them once they occur.”',
        },
      ],
    },
    {
      sno: 47,
      id: 'bempedoic-acid-api-manufacturers-in-india',
      productName: 'Bempedoic acid',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antihyperlipidemic',
      casNumber: '738606-46-7',
      details: 'Know More',

      name: 'Bempedoic acid',
      image: '../../../assets/images/products/Bempedoic-acid-47.png',
      productName1: 'Bempedoic acid',

      productDescription: {
        Therapeutic: 'Anti Hyperlipidemic',
        CASNumber: '738606-46-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 9',
          letter2: 'H',
          number2: '3 6',
          letter3: 'O',
          number3: '5',
        },
        MolecularWeight: '344.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is a ',
        manufacturers: ' Bempedoic acid API manufacturer in india.',

        extra: `We are having technically the maximum superior manufacturing centers and our complete production procedure is as per regulatory policies.We are based on meeting our client’s needs. This helps us to produce innovative quality goods at an competitive price / cost.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'is an adenosine triphosphate-citrate lyase (ACL) inhibitor that lowers low-density lipoprotein cholesterol (LDL-C) by inhibition of cholesterol synthesis in the liver. ACL is an enzyme upstream of 3-hydroxy-3-methyl-glutaryl-coenzyme A (HMG-CoA) reductase in the cholesterol biosynthesis pathway. Bempedoic acid and its active metabolite, ESP15228, require coenzyme A (CoA) activation by very long-chain acyl-CoA synthetase 1 (ACSVL1) to ETC-1002-CoA and ESP15228-CoA, respectively. ACSVL1 is expressed primarily in the liver. Inhibition of ACL by ETC-1002-CoA results in decreased cholesterol synthesis in the liver and lowers LDL-C in blood via upregulation of low-density lipoprotein receptors. ',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ', sold under the brand name Nexletol among others, is a medication for the treatment of hypercholesterolemia (high blood cholesterol levels).',
      Indication5: [
        {
          point1:
            '  is indicated as an adjunct to diet and maximally tolerated statin therapy for the treatment of adults with heterozygous familial hypercholesterolemia or established atherosclerotic cardiovascular disease who require additional lowering of LDL-C.',
        },
      ],
    },
    {
      sno: 48,
      id: 'dabigatran-etexilate-mesylate-api-pellet-manufacturers-in-india',
      productName: 'Dabigatran Etexilate Mesylate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antithrombotic/Anticoagulant',
      casNumber: '872728-81-9',
      details: 'Know More',

      name: 'Dabigatran Etexilate Mesylate API&Pellet',
      image:
        '../../../assets/images/products/Dabigatran-Etexilate-Mesylate-48.png',
      productName1: 'Dabigatran Etexilate Mesylate',
      productDescription: {
        Therapeutic: 'Antithrombotic / Anticoagulant',
        CASNumber: '872728-81-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 4',
          letter2: 'H',
          number2: '4 1',
          letter3: 'N',
          number3: '7',
          letter4: 'O',
          number4: '5',
        },
        MolecularWeight: '627.7 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule',
        MetrochemDevelopmentStatus: 'Commercial',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: ' is one of the leading ',
        manufacturers:
          'Dabigatran Etexilate Mesylate API&Pellets Manufacturers  in india.',

        extra: `We are dedicated to developing and producing quality pharmaceutical products which exceed customer satisfaction by continuously improving processes.Our continuous improvement of the cost reduction cycle to ensure long-term sustainability for various companies.`,
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        ' and its acyl glucuronides are competitive, direct thrombin inhibitors. Because thrombin (serine protease) enables the conversion of fibrinogen into fibrin during the coagulation cascade, its inhibition prevents the development of a thrombus. Both free and clot-bound thrombin, and thrombin-induced platelet aggregation are inhibited by the active moieties.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'is a direct thrombin inhibitor indicated to reduce the risk of stroke and systemic embolism in patients with non-valvular atrial fibrillation.This drug can also be used to prevent these blood clots from forming after hip replacement surgery. Dabigatran is an anticoagulant that works by blocking a certain substance (a protein called thrombin) in your blood. It helps to keep blood flowing smoothly in your body.',
    },
    {
      sno: 49,
      id: 'flecainide-acetate-api-manufacturers-in-india',
      productName: 'Flecainide Acetate',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antianginal',
      casNumber: '54143-55-4',
      details: 'Know More',

      name: 'Flecainide Acetate',
      image: '../../../assets/images/products/Flecainide-Acetate-49.png',
      productName1: 'Flecainide Acetate',
      productDescription: {
        Therapeutic: 'Antiarrhythmic Agent',
        CASNumber: '54143-55-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 9',
          letter2: 'H',
          number2: '2 4',
          letter3: 'F',
          number3: '6',
          letter4: 'N',
          number4: '2',
          letter5: 'O',
          number5: '5',
        },
        MolecularWeight: '474.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet ,Capsule, Granule, Injectable, Solution',
        MetrochemDevelopmentStatus: 'Pipeline',

        companyName4: 'Metrochem API Pvt Ltd',
        text1: ' is one of the ',
        manufacturers: 'Flecainide Acetate Manufacturers in India,',

        extra: `we supply and export of a wide range of high-grade pharmaceutical APIs to semi-regulated and non-market markets around the world.`,

        extra2:
          'Pharmaceutical API Quality has always been our primary concern and we are taking action to maintain the quality standards.We are engaged in manufacturing and exporting Active pharmaceutical ingredients (API). We offering best quality range of active pharmaceutical ingredients (API) in competitive prices. Pharmaceutical API Quality has always been our primary concern and we taking measure to maintain the qualitative standards. We ensure that the client have no concerns regarding the quality of Pharmaceutical API, we serve them. Keeping in mind the variegated requirements of clients, these Pharmaceutical API are formulated at our end to achieve their maximum contentment. In addition, we ensure to dispatch our range on-time to the client’s destination.',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Flecainide acts on the fast-inward Na+ ion channel and has a high affinity to activated or open Na+ channels. It prolongs the depolarization and increases refractoriness due to slow release from its binding site. It potently acts on the His-Purkinje system. It also works by inhibiting IKr channels, delaying potassium rectifier current resulting in prolongation of action potential duration in both ventricular and atrial muscle fibers. Flecainide is shown to block ryanodine receptor opening, which reduces calcium release from sarcoplasmic reticulum resulting in after depolarization and triggered activity. Hence, indications for flecainide include catecholaminergic polymorphic ventricular tachycardia (CPVT).',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'API is an antiarrhythmic agent of Class IC is used to treat certain types of severe (possibly fatal) irregular heartbeat (such as persistent ventricular tachycardia and supraventricular paroxysmal tachycardia). It is used to restore normal heart rhythm and to maintain a steady, regular heartbeat. It also serves to prevent the return of certain types of irregular heartbeat (such as atrial fibrillation).',
    },
    {
      sno: 50,
      id: 'ivabradine-api-manufacturers-in-india',
      productName: 'Ivabradine Hydrochloride',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antianginal',
      casNumber: '148849-67-6',
      details: 'Know More',

      name: 'Ivabradine',
      image: '../../../assets/images/products/Ivabradine-50.png',
      productDescription: {
        Therapeutic: 'Antianginal',
        CASNumber: '155974-00-8 ',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 7',
          letter2: 'H',
          number2: '3 6',
          letter3: 'N',
          number3: '2',
          letter4: 'O',
          number4: '5',
        },
        MolecularWeight: '468.6 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction: `
        Ivabradine blocks the hyperpolarization-activated cyclic nucleotide-gated (HCN) channel responsible for the cardiac pacemaker If current, which regulates heart rate. In clinical electrophysiology studies, the cardiac effects were most pronounced in the sinoatrial (SA) node, but prolongation of the AH interval has occurred as has PR interval prolongation. There was no effect on ventricular repolarization and no effects on myocardial contractility


        `,
      MechanismOfAction2:
        ' Ivabradine can also inhibit the retinal current Ih. Ih is involved in curtailing retinal responses to bright light stimuli. Under triggering circumstances (e.g., rapid changes in luminosity), partial inhibition of Ih by Corlanor may underlie the luminous phenomena experienced by patients. Luminous phenomena (phosphenes) are described as a transient enhanced brightness in a limited area of the visual field.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication8: [
        {
          text1:
            'Ivabradine is a hyperpolarization-activated cyclic nucleotide-gated channel blocker indicated:',
          point1:
            'To reduce the risk of hospitalization for worsening heart failure in adult patients with stable, symptomatic chronic heart failure with reduced left ventricular ejection fraction.',
        },
        {
          point1:
            'For the treatment of stable symptomatic heart failure due to dilated cardiomyopathy in pediatric patients ages 6 months and older.',
        },
      ],
    },
    {
      sno: 51,
      id: 'ranolazine-api-manufacturers-in-india',
      productName: 'Ranolazine',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antianginal',
      casNumber: '95635-56-6',
      details: 'Know More',

      name: 'Ranolazine',
      image: '../../../assets/images/products/Ranolazine-51.png',
      productDescription: {
        Therapeutic: 'Antianginal',
        CASNumber: '95635-55-5',
        MolecularFormula: {
          // letter1:'C',
          // number1:'2 4',
          // letter2:'H',
          // number2:'3 3',
          // letter3:'N',
          // number3:'3',
          // letter4:'O',
          // number4:'4'
        },
        MolecularWeight: '427.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The mechanism of action of ranolazine’s antianginal effects has not been determined. Ranolazine has anti-ischemic and antianginal effects that do not depend upon reductions in heart rate or blood pressure. It does not affect the rate-pressure product, a measure of myocardial work, at maximal exercise. Ranolazine at therapeutic levels can inhibit the cardiac late sodium current (INa). However, the relationship of this inhibition to angina symptoms is uncertain. The QT prolongation effect of ranolazine on the surface electrocardiogram is the result of inhibition of IKr, which prolongs the ventricular action potential',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'Ranexa is indicated for the treatment of chronic angina. Ranexa may be used with beta-blockers, nitrates, calcium channel blockers, anti-platelet therapy, lipid-lowering therapy, ACE inhibitors, and angiotensin receptor blockers.',
        },
      ],
    },
    {
      sno: 52,
      id: 'gabapentin-api-manufacturers-in-india',
      productName: 'Gabapentin',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiepileptic',
      casNumber: '60142-96-3',
      details: 'Know More',

      name: 'Gabapentin',
      image: '../../../assets/images/products/gabapentin-52.png',
      productDescription: {
        Therapeutic: 'Anticonvulsant',
        CASNumber: '60142-96-3',
        MolecularFormula: {
          letter1: 'C',
          number1: '9',
          letter2: 'H',
          number2: '1 7',
          letter3: 'N O',
          number3: '2',
        },
        MolecularWeight: '171.237 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The precise mechanisms by which gabapentin produces its analgesic and antiepileptic actions are unknown. Gabapentin is structurally related to the neurotransmitter gamma-aminobutyric acid (GABA) but has no effect on GABA binding, uptake, or degradation. In vitro studies have shown that gabapentin binds with high-affinity to the α2δ subunit of voltage-activated calcium channels; however, the relationship of this binding to the therapeutic effects of gabapentin is unknown.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication8: [
        {
          text1: 'Gabapentin is indicated for:',
          point1: 'Management of postherpetic neuralgia in adults',
        },
        {
          point1:
            'Adjunctive therapy in the treatment of partial onset seizures, with and without secondary generalization, in adults and pediatric patients 3 years and older with epilepsy.',
        },
      ],
    },
    {
      sno: 53,
      id: 'lacosamide-hydrochloride-api-manufacturers-in-india',
      productName: 'Lacosamide',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiepileptic',
      casNumber: '175481-36-4',
      details: 'Know More',

      name: 'Lacosamide',
      image: '../../../assets/images/products/Lacosamide.svg-53.png',
      productDescription: {
        Therapeutic: 'Antiepileptic',
        CASNumber: '175481-36-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 3',
          letter2: 'H',
          number2: '1 8',
          letter3: 'N',
          number3: '2',
          letter4: 'O',
          number4: '3',
        },
        MolecularWeight: '250.29',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The precise mechanism by which VIMPAT exerts its antiepileptic effects in humans remains to be fully elucidated. In vitro electrophysiological studies have shown that lacosamide selectively enhances slow inactivation of voltage-gated sodium channels, resulting in stabilization of hyperexcitable neuronal membranes and inhibition of repetitive neuronal firing. Lacosamide binds to collapsin response mediator protein-2 (CRMP-2), a phosphoprotein which is mainly expressed in the nervous system and is involved in neuronal differentiation and control of axonal outgrowth. The role of CRMP-2 binding in seizure control is unknown.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'Tablets are indicated for adjunctive therapy in patients ≥17 years. Injection is indicated as short term replacement when oral administration is not feasible in these patients. ',
        },
      ],
    },
    {
      sno: 54,
      id: 'vigabatrin-api-manufacturers-in-india',
      productName: 'Vigabatrin',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antiepileptic',
      casNumber: '60643-86-9',
      details: 'Know More',

      name: 'Vigabatrin',
      image: '../../../assets/images/products/Vigabatrin-54.png',
      productDescription: {
        Therapeutic: 'Anticonvulsant/Anti epileptic',
        CASNumber: '60643-86-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '6',
          letter2: 'H',
          number2: '1 1',
          letter3: 'N O',
          number3: '2',
        },
        MolecularWeight: ' 129.159 g·mol−1',
        MeshSize: 'As per Customer Requirement',
        Form: 'Granule, Powder, Solution, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The precise mechanism of vigabatrin’s anti-seizure effect is unknown, but it is believed to be the result of its action as an irreversible inhibitor of γ-aminobutyric acid transaminase (GABA-T), the enzyme responsible for the metabolism of the inhibitory neurotransmitter GABA. This action results in increased levels of GABA in the central nervous system. No direct correlation between plasma concentration and efficacy has been established. The duration of drug effect is presumed to be dependent on the rate of enzyme re-synthesis rather than on the rate of elimination of the drug from the systemic circulation.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication2: [
        {
          point2: 'Refractory Complex Partial Seizures (CPS):',
          text1:
            'Vigabatrin  is indicated as adjunctive therapy for adults and pediatric patients 10 years of age and older with refractory complex partial seizures who have inadequately responded to several alternative treatments and for whom the potential benefits outweigh the risk of vision loss [see Warnings and Precautions (5.1)]. SABRIL is not indicated as a first line agent for complex partial seizures.',
        },
        {
          point2: 'Infantile Spasms (IS):',
          text1:
            'Vigabatrin is indicated as monotherapy for pediatric patients with infantile spasms 1 month to 2 years of age for whom the potential benefits outweigh the potential risk of vision loss [see Warnings and Precautions.',
        },
      ],
    },
    {
      sno: 55,
      id: 'stiripentol-api-manufacturers-in-india',
      productName: 'Stiripentol',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Anticonvulsant/Dravet Syndrome',
      casNumber: '49763-96-4',
      details: 'Know More',

      name: 'Stiripentol',
      image: '../../../assets/images/products/Stiripentol-55.png',
      productName2: 'Stiripentol',
      productDescription: {
        Therapeutic: 'Anticonvulsant/Dravet Syndrome',
        CASNumber: '49763-96-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 4',
          letter2: 'H',
          number2: '1 8',
          letter3: 'O',
          number3: '3',
        },
        MolecularWeight: '234.29 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Powder',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction1:
        'The mechanism by which DIACOMIT exerts its anticonvulsant effect in humans is unknown. Possible mechanisms of action include direct effects mediated through the gamma-aminobutyric acid (GABA)A receptor and indirect effects involving inhibition of cytochrome P450 activity with resulting increase in blood levels of clobazam and its active metabolite.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel1:
        ' is indicated for the treatment of seizures associated with Dravet syndrome (DS) in patients 2 years of age and older taking clobazam. There are no clinical data to support the use of DIACOMIT as monotherapy in Dravet syndrome.',
    },
    {
      sno: 56,
      id: 'tranexamic-acid-api-manufacturers-in-india',
      productName: 'Tranexamic Acid',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antifibrinolyti',
      casNumber: '1197-18-8',
      details: 'Know More',

      name: 'Tranexamic Acid',
      image: '../../../assets/images/products/Tranexamic-Acid-56.png',
      productDescription: {
        Therapeutic: 'Antifibrinolytic',
        CASNumber: '1197-18-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '8',
          letter2: 'H',
          number2: '1 5',
          letter3: 'N O',
          number3: '2',
        },
        MolecularWeight: '157.21 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet , Liquid, Injection',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Tranexamic acid is a synthetic lysine amino acid derivative, which diminishes the dissolution of hemostatic fibrin by plasmin. In the presence of tranexamic acid, the lysine receptor binding sites of plasmin for fibrin are occupied, preventing binding to fibrin monomers, thus preserving and stabilizing fibrin’s matrix structure. The antifibrinolytic effects of tranexamic acid are mediated by reversible interactions at multiple binding sites within plasminogen. Native human plasminogen contains 4 to 5 lysine binding sites with low affinity for tranexamic acid (K d = 750 µmol/L) and 1 with high affinity (Kd = 1.1 µmol/L). The high affinity lysine site of plasminogen is involved in its binding to fibrin. Saturation of the high affinity binding site with tranexamic acid displaces plasminogen from the surface of fibrin. Although plasmin may be formed by conformational changes in plasminogen, binding to and dissolution of the fibrin matrix is inhibited.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'Tranexamic acid Tablets is indicated for the treatment of cyclic heavy menstrual bleeding.',
        },
        {
          point3:
            'Prior to prescribing LYSTEDA, exclude endometrial pathology that can be associated with heavy menstrual bleeding.',
        },
      ],
    },
    {
      sno: 57,
      id: 'elobixibat-api-manufacturers-in-india',
      productName: 'Elobixibat Hydrate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Irritable Bowel Syndrome - Constipation',
      casNumber: '439087-18-0',
      details: 'Know More',

      name: 'Elobixibat',
      image: '../../../assets/images/products/Elobixibat-57.png',
      productDescription: {
        Therapeutic: 'Constipation',
        CASNumber: '439087-18-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 6',
          letter2: 'H',
          number2: '4 5',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '7',
          letter5: 'S',
          number5: '2',
        },
        MolecularWeight: '695.89 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Elobixibat, an ileal bile acid transporter inhibitor, is another medication with an original mechanism of action by blocking the absorption of bile acids, which in turn stimulate colonic secretions. It showed potential to treat chronic constipation.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3: 'Treatment of chronic constipation.',
        },
      ],
    },
    {
      sno: 58,
      id: 'migalastat-api-manufacturers-in-india',
      productName: 'Migalastat Hydrochloride',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Fabry Disease',
      casNumber: '108147-54-2',
      details: 'Know More',

      name: 'Migalastat',
      image: '../../../assets/images/products/Migalastat-58.png',
      productDescription: {
        Therapeutic: ' Fabry Diseases',
        CASNumber: '108147-54-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '6',
          letter2: 'H',
          number2: '1 3',
          letter3: 'N O',
          number3: '4',
        },
        MolecularWeight: '163.17 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Migalastat is a pharmacological chaperone that reversibly binds to the active site of the alpha-galactosidase A (alpha-Gal A) protein (encoded by the galactosidase alpha gene, GLA), which is deficient in Fabry disease. This binding stabilizes alpha-Gal A allowing its trafficking 6 Reference ID: 4305282 from the endoplasmic reticulum into the lysosome where it exerts its action. In the lysosome, at a lower pH and at a higher concentration of relevant substrates, migalastat dissociates from alpha-Gal A allowing it to break down the glycosphingolipids globotriaosylceramide (GL-3) and globotriaosylsphingosine (lyso-Gb3). Certain GLA variants (mutations) causing Fabry disease result in the production of abnormally folded and less stable forms of the alpha-Gal A protein which, however, retain enzymatic activity. Those GLA variants, referred to as amenable variants, produce alpha-Gal A proteins that may be stabilized by migalastat thereby restoring their trafficking to lysosomes and their intralysosomal activity.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'GALAFOLD™ is an alpha-galactosidase A (alpha-Gal A) pharmacological chaperone indicated for the treatment of adults with a confirmed diagnosis of Fabry disease and an amenable galactosidase alpha gene (GLA) variant based on in vitro assay data.This indication is approved under accelerated approval based on reduction in kidney interstitial capillary cell globotriaosylceramide (KIC GL-3) substrate. Continued approval for this indication may be contingent upon verification and description of clinical benefit in confirmatory trials.',
        },
      ],
    },
    {
      sno: 59,
      id: 'pirfenidone-api-manufacturers-in-india',
      productName: 'Pirfenidone',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Idiopathic Pulmonary Fibrosis',
      casNumber: '53179-13-8',
      details: 'Know More',

      name: 'Pirfenidone',
      image: '../../../assets/images/products/Pirfenidone-59.png',
      productDescription: {
        Therapeutic: 'Idiopathic Pulmonary Fibrosis',
        CASNumber: '53179-13-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 2',
          letter2: 'H',
          number2: '1 1',
          letter3: 'N O',
        },
        MolecularWeight: '185.22 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Wishlist',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'The mechanism of action of pirfenidone in the treatment of IPF has not been established. ',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'ESBRIET is a pyridone indicated for the treatment of idiopathic pulmonary fibrosis (IPF).',
        },
      ],
    },
    {
      sno: 60,
      id: 'silodosin-api-pellet-manufacturers-in-india',
      productName: 'Silodosin',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Benign Prostatic Hyperplasia (BPH)',
      casNumber: '160970-54-7',
      details: 'Know More',

      name: 'Silodosin API&Pellet',
      image: '../../../assets/images/products/Silodosin-60.png',
      productName4: 'Silodosin',

      productDescription: {
        Therapeutic: 'Benign Prostate Hyperplasia (BPH)',
        CASNumber: '160970-54-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '3 2',
          letter3: 'F',
          number3: '3',
          letter4: 'N',
          number4: '3',
          letter5: 'O',
          number5: '4',
        },
        MolecularWeight: '495.534 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction4:
        ' is a selective antagonist of post-synaptic alpha-1 adrenoreceptors, which are located in the human prostate, bladder base, bladder neck, prostatic capsule, and prostatic urethra. Blockade of these alpha-1 adrenoreceptors can cause smooth muscle in these tissues to relax, resulting in an improvement in urine flow and a reduction in BPH symptoms. An in vitro study examining binding affinity of silodosin to the three subtypes of the alpha-1 adrenoreceptors (alpha-1A, alpha-1B, and alpha-1D) was conducted. The results of the study demonstrated that silodosin binds with high affinity to the alpha-1A subtype.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication3: [
        {
          point3:
            'RAPAFLO, an alpha-1 adrenergic receptor antagonist, is indicated for the treatment of the signs and symptoms of benign prostatic hyperplasia (BPH). (1) RAPAFLO is not indicated for the treatment of hypertension.',
        },
      ],
    },
    {
      sno: 61,
      // id: 61,
      productName: 'Flurbiprofen',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Analgesic',
      casNumber: '5104-49-4',
      // details: 'Know More',

      name: 'Omeprazole API&Pellet',
      image: '../../../assets/images/products/Omeprazole-1.png',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: 73590 - 58 - 6,
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '1 9',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '3',
          letter5: 'S',
        },
        MolecularWeight: '345.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Granule, Injectable, Powder, Solution, Suspension, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Omeprazole belongs to a class of antisecretory compounds, the substituted benzimidazoles, that suppress gastric acid secretion by specific inhibition of the H+ /K+ ATPase enzyme system at the secretory surface of the gastric parietal cell. Because this enzyme system is regarded as the acid (proton) pump within the gastric mucosa, omeprazole has been characterized as a gastric acid-pump inhibitor, in that it blocks the final step of acid production. This effect is dose-related and leads to inhibition of both basal and stimulated acid secretion irrespective of the stimulus. Animal studies indicate that after rapid disappearance from plasma, omeprazole can be found within the gastric mucosa for a day or more.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication: {
        title: 'Omeprazole is a proton pump inhibitor indicated for:',
        point1: 'Duodenal Ulcer (adults)',
        point2: 'Gastric Ulcer (adults)',
        point3:
          'Treatment of Gastroesophageal Reflux Disease (GERD) (adults and pediatric patients)',
        point4: 'Maintenance of Healing of Erosive Esophagitis (adults)',
        point5: 'Pathological Hypersecretory Conditions',
      },
    },
    {
      sno: 62,
      id: 'etoricoxib-api-manufacturers-in-india',
      productName: 'Etoricoxib',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Analgesic',
      casNumber: '202409-33-4',
      details: 'Know More',

      name: 'Etoricoxib',
      image: '../../../assets/images/products/etoricoxib-62.png',
      productDescription: {
        Therapeutic: 'Analgesic',
        CASNumber: '202409-33-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '1 5',
          letter3: 'C l N',
          number3: '2',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: ' 358.8 g/mol ',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet , Capsule, Gel, Injectable',
        MetrochemDevelopmentStatus: 'Commercial',
        extra:
          'Metrochem API Pvt Ltd is one of the largest Etoricoxib Manufacturers in India. Metrochem supplies innovative & Quality formulations to our customers at market-attainable prices.We offer a wide range of active pharmaceutical ingredients. In addition to this, We are also counted among the world’s most well-known API suppliers. The active pharmaceutical ingredients which we offer are used to treat different diseases.Our active pharma ingredients, in terms of quality and prompt delivery, are accessible at the most reasonable prices.',
      },
      MechanismTitel: '  Mechanism of Action:',
      MechanismOfAction:
        'Like any other COX-2 selective inhibitor Etoricoxib selectively inhibits isoform 2 of cyclo-oxigenase enzyme (COX-2), preventing production of prostaglandins (PGs) from arachidonic acid.',
      companyName: 'Metrochem API Pvt Ltd',
      Indication: {
        point1:
          'Etoricoxib, also known as Arcoxia, is a non-steroidal anti-inflammatory drug (NSAID) that is used to treat psoriatic arthritis, osteoarthritis, and rheumatoid arthritis. This drug relieves people suffering from acute pain, chronic musculoskeletal pain and prevents acute gouty arthritis and ankylosing spondylitis.It belongs to cyclooxygenase-2 (COX-2) specific inhibitors class of medicines which decrease pain and inflammation by blocking the pain causing enzymes (COX-2) in the body. This drug is only used when its alternative medicinal products have not helped with treatment.',
      },
    },
    {
      sno: 63,
      id: 'alogliptin-benzoate-api-manufacturers-in-india',
      productName: 'Alogliptin Benzoate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '850649-62-6',
      details: 'Know More',

      name: 'Alogliptin Benzoate',
      image: '../../../assets/images/proucts2/alogliptin-benzoate-3.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '850649-62-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '2 7',
          letter3: 'N',
          number3: '5',
          letter4: 'O',
          number4: '4',
        },
        MolecularWeight: '461.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Increased concentrations of the incretin hormones such as glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP) are released into the bloodstream from the small intestine in response to meals. These hormones cause insulin release from the pancreatic beta cells in a glucose-dependent manner but are inactivated by the dipeptidyl peptidase-4 (DPP-4) enzyme within minutes. GLP-1 also lowers glucagon secretion from pancreatic alpha cells, reducing hepatic glucose production. In patients with type 2 diabetes, concentrations of GLP-1 are reduced but the insulin response to GLP-1 is preserved. Alogliptin is a DPP-4 inhibitor that slows the inactivation of the incretin hormones, thereby increasing their bloodstream concentrations and reducing fasting and postprandial glucose concentrations in a glucose-dependent manner in patients with type 2 diabetes mellitus. Alogliptin selectively binds to and inhibits DPP-4 but not DPP-8 or DPP-9 activity in vitro at concentrations approximating therapeutic exposures.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'NESINA is a dipeptidyl peptidase-4 (DPP-4) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.',
        },
      ],
    },
    {
      sno: 64,
      id: 'apixaban',
      productName: 'Apixaban',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antithrombotic / Anticoagulant',
      casNumber: '503612-47-3',
      details: '',

      name: 'Apixaban',
      image: '../../../assets/images/proucts2/alogliptin-benzoate-3.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '503612-47-3',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '2 7',
          letter3: 'N',
          number3: '5',
          letter4: 'O',
          number4: '4',
        },
        MolecularWeight: '461.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Increased concentrations of the incretin hormones such as glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP) are released into the bloodstream from the small intestine in response to meals. These hormones cause insulin release from the pancreatic beta cells in a glucose-dependent manner but are inactivated by the dipeptidyl peptidase-4 (DPP-4) enzyme within minutes. GLP-1 also lowers glucagon secretion from pancreatic alpha cells, reducing hepatic glucose production. In patients with type 2 diabetes, concentrations of GLP-1 are reduced but the insulin response to GLP-1 is preserved. Alogliptin is a DPP-4 inhibitor that slows the inactivation of the incretin hormones, thereby increasing their bloodstream concentrations and reducing fasting and postprandial glucose concentrations in a glucose-dependent manner in patients with type 2 diabetes mellitus. Alogliptin selectively binds to and inhibits DPP-4 but not DPP-8 or DPP-9 activity in vitro at concentrations approximating therapeutic exposures.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'NESINA is a dipeptidyl peptidase-4 (DPP-4) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.',
        },
      ],
    },
    {
      sno: 65,
      id: 'edoxaban-tosylate-api-manufacturers-in-india',
      productName: 'Edoxaban Tosylate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antithrombotic/Anticoagulant',
      casNumber: '480449-71-6',
      details: 'Know More',

      name: 'Edoxaban Tosylate',
      image: '../../../assets/images/proucts2/Edoxaban-Tosylate-12.png',
      productName2: 'Edoxaban ',
      productDescription: {
        Therapeutic: 'Antithrombotic / Anticoagulant',
        CASNumber: '480449-71-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 4',
          letter2: 'H',
          number2: '3 0',
          letter3: 'C l N',
          number3: '7',
          letter4: 'O',
          number4: '4',
          letter5: 'S',
        },
        MolecularWeight: '720.3 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'SAVAYSA is indicated to reduce the risk of stroke and systemic embolism (SE) in patients with nonvalvular atrial fibrillation (NVAF).',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      indicationTitel1:
        ' is a selective inhibitor of FXa. It does not require antithrombin III for antithrombotic activity. Edoxaban inhibits free FXa, and prothrombinase activity and inhibits thrombin-induced platelet aggregation. Inhibition of FXa in the coagulation cascade reduces thrombin generation and reduces thrombus formation.',
    },
    {
      sno: 66,
      id: 'empagliflozin-api-manufacturers-in-india',
      productName: 'Empagliflozin',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '864070-44-0',
      details: 'Know More',

      name: 'Empagliflozin',
      productName1: 'Empagliflozin',
      image: '../../../assets/images/proucts2/empagliflozin-5.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '864070-44-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 3',
          letter2: 'H',
          number2: '2 7',
          letter3: 'C l O',
          number3: '7',
        },
        MolecularWeight: '450.91 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Empagliflozin is a sodium-glucose co-transporter 2 (SGLT2) inhibitor. SGLT2 is the predominant transporter responsible for reabsorption of glucose from the glomerular filtrate back into the circulation. By inhibiting SGLT2, empagliflozin reduces renal reabsorption of filtered glucose and lowers the renal threshold for glucose, and thereby increases urinary glucose excretion. ',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication: [
        {
          point1:
            'Indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes',
        },
        {
          point1:
            'Indicated to reduce the risk of cardiovascular death in adults with type 2 diabetes mellitus and cardiovascular disease',
        },
      ],
    },
    {
      sno: 67,
      id: 'cenobamate-api-manufacturers-in-india',
      productName: 'Isavuconazonium Sulfate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antifungal',
      casNumber: '946075-13-4',
      details: 'Know More',

      name: 'Cenobamate',
      image: '../../../assets/images/proucts2/Cenobamate-8.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '913088-80-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 0',
          letter2: 'H',
          number2: '1 0',
          letter3: 'C l N',
          number3: '5',
          letter4: 'O',
          number4: '2',
        },
        MolecularWeight: ' 267.67 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Wishlist',
        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the well-known',
        manufacturers: 'Cenobamate Manufacturers in India.',

        extra: `We have well-defined quality policies and our products undergo strict quality check in every stage of manufacturing at our factories. Our products meet international quality standards and exports worldwide.`,
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'The precise mechanism by which cenobamate exerts its therapeutic effects in patients with partialonset seizures is unknown. Cenobamate has been demonstrated to reduce repetitive neuronal firing by inhibiting voltage-gated sodium currents. It is also a positive allosteric modulator of the γ-aminobutyric acid (GABAA) ion channel.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'XCOPRI is indicated for the treatment of partial-onset seizures in adult patients',
        },
      ],
    },
    {
      sno: 68,
      id: 'lasmiditan-api-manufacturers-in-india',
      productName: 'Lasmiditan',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antimigraine',
      casNumber: '439239-90-4',
      details: 'Know More',

      name: 'Lasmiditan',
      productName1: 'Lasmiditan',
      image: '../../../assets/images/proucts2/Lasmiditan-10.png',
      productDescription: {
        Therapeutic: 'Antimigraine',
        CASNumber: '439239-90-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 9',
          letter2: 'H',
          number2: '1 8',
          letter3: 'F',
          number3: '3',
          letter4: 'N',
          number4: '3',
          letter5: 'O',
          number5: '2',
        },
        MolecularWeight: '872.8 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Wishlist',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        ' binds with high affinity to the 5-HT1F receptor. Lasmiditan presumably exerts its therapeutic effects in the treatment of migraine through agonist effects at the 5-HT1F receptor; however, the precise mechanism is unknown.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is indicated for the acute treatment of migraine with or without aura in adults. Limitations of Use:',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'REYVOW is not indicated for the preventive treatment of migraine.',
        },
      ],
    },
    {
      sno: 69,
      id: 'mirabegron-api-manufacturers-in-india',
      productName: 'Mirabegron (Incl. Amorphous)',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Overactive Bladder',
      casNumber: '223673-61-8',
      details: 'Know More',

      name: 'Mirabegron',
      image: '../../../assets/images/proucts2/Mirabegron-Amorphous-19.png',
      productDescription: {
        Therapeutic: 'Overactive Bladder',
        CASNumber: '223673-61-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 1',
          letter2: 'H',
          number2: '2 4',
          letter3: 'N',
          number3: '4',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: '396.506 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Mirabegron is an agonist of the human beta-3 adrenergic receptor (AR) as demonstrated by in vitro laboratory experiments using the cloned human beta-3 AR. Mirabegron relaxes the detrusor smooth muscle during the storage phase of the urinary bladder fill-void cycle by activation of beta-3 AR which increases bladder capacity. Although mirabegron showed very low intrinsic activity for cloned human beta-1 AR and beta-2 AR, results in humans indicate that beta-1 AR stimulation occurred at a mirabegron dose of 200 mg.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'Mirabegron is a beta-3 adrenergic agonist indicated for the treatment of overactive bladder (OAB) with symptoms of urge urinary incontinence, urgency, and urinary frequency.',
        },
      ],
    },
    {
      sno: 70,
      id: 'tedizolid-phosphate-api-manufacturers-in-india',
      productName: 'Tedizolid Phosphate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antibiotic',
      casNumber: '856867-55-5',
      details: 'Know More',

      name: 'Tedizolid Phosphate',
      image: '../../../assets/images/proucts2/Tedizolid-Phosphate-1.png',
      productName1: 'Tedizolid Phosphate',
      productDescription: {
        Therapeutic: 'Antibiotic',
        CASNumber: ' 856867-55-5',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '1 5',
          letter3: 'F N',
          number3: '6',
          letter4: 'O',
          number4: '3',
        },
        MolecularWeight: '450.3 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Injectable, Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      Indicationtitel1: 'Indication:',
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        ' is the prodrug of tedizolid, an antibacterial agent.The antibacterial activity of tedizolid is mediated by binding to the 50S subunit of the bacterial ribosome resulting in inhibition of protein synthesis. Tedizolid inhibits bacterial protein synthesis through a mechanism of action different from that of other non-oxazolidinone class antibacterial drugs; therefore, cross-resistance between tedizolid and other classes of antibacterial drugs is unlikely.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        ' is an oxazolidinone-class antibacterial drug indicated in adults for the treatment of acute bacterial skin and skin structure infections (ABSSSI) caused by designated susceptible bacteria. (1) To reduce the development of drug-resistant bacteria and maintain the effectiveness of SIVEXTRO and other antibacterial drugs, SIVEXTRO should be used only to treat or prevent infections that are proven or strongly suspected to be caused by bacteria.',
    },
    {
      sno: 71,
      id: 'vonoprazan-api-manufacturers-in-india',
      productName: 'Vonoprazan Fumarate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antiulcerative',
      casNumber: '881681-00-1',
      details: 'Know More',

      name: 'Vonoprazan',
      image: '../../../assets/images/proucts2/Vonoprazan-13.png',
      productDescription: {
        Therapeutic: 'Antiulcerative',
        CASNumber: '881681-00-1 ',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 7',
          letter2: 'H',
          number2: '1 6',
          letter3: 'F N',
          number3: '3',
          letter4: 'O',
          number4: '2',
          letter5: 'S',
        },
        MolecularWeight: '461.46 g/mol ',
        MeshSize: 'As per Customer Requirement',
        Form: ' Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Vonoprazan fumarate is P-CAB, which inhibits H+, K+-ATPase (IC50 = 19.3 nM, pH = 6.5), the final step of acid secretion (IC50 = 300 nM) in the gastric parietal cells.',
      MechanismOfAction2:
        'Vonoprazan fumarate did not show the anti-microbial activity for H.pylori (MIC >277 µg/mL), nor affected the anti-H.pylori activity of AMPC, CAM and MNZ.',
      MechanismOfAction3:
        'Vonoprazan fumarate had no significant inhibition in the off-target activity assays for a panel of 133 functional proteins including receptors, ion channels, transporters and enzymes at 10 μM, except L-type calcium channels, muscarinic M1, M2 and M3 receptors, 5-HT2 receptor, σ receptor and sodium channel.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication: [
        {
          point1:
            'Gastric ulcer, duodenal ulcer, reflux esophagitis, prevention of recurrence of gastric or duodenal ulcer during low-dose aspirin administration, prevention of recurrence of gastric or duodenal ulcer during non-steroidal anti-inflammatory drug (NSAID) administration',
        },
        {
          point1:
            'Adjunct to Helicobacter pylorieradication in the following settings: Gastric ulcer, duodenal ulcer, gastric mucosa-associated lymphatic tissue (MALT) lymphoma, idiopathic thrombocytopenic purpura, the stomach after endoscopic resection of early stage gastric cancer, or Helicobacter pylori gastritis',
        },
      ],
    },
  ];
  APIsGenericProductPortfolio() {
    return of(this.APIsGenericproductPortfolioDetails);
  }

  underValidationProducts = [

    {
      sno: 2,
      id: 'vortioxetine-api-manufacturers-in-india',
      productName: 'Vortioxetine',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Antidepressant',
      casNumber: '960203-27-4',
      details: 'Know More',

      name: 'Vortioxetine Hydrobromide',
      image: '../../../assets/images/proucts2/Vortioxetine-2.png',
      productName1: 'Vortioxetine ',
      productDescription: {
        Therapeutic: 'Antidepressant',
        CASNumber: ' 508233-74-7',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 8',
          letter2: 'H',
          number2: '2 2',
          letter3: 'N',
          number3: '2',
          letter4: 'S',
        },
        MolecularWeight: ' 298.4 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Capsule, Tablet',
        MetrochemDevelopmentStatus: 'Pipeline',
      },

      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        '’s mechanism of action is not fully understood. Vortioxetine binds with high affinity to the serotonin transporter (Ki = 1.6 nM) and its antidepressant actions are believed to be secondary to enhancing serotonin in the central nervous system through inhibition of reuptake. Vortioxetine also displays binding affinities to other serotonin (5-HT) receptors, including 5-HT3, 5-HT1A, and 5-HT7, with Ki values of 3.7 nM, 15 nM, and 19 nM, respectively. There is moderate affinity toward serotonin receptors 5-HT1D and 5-HT1B, with Ki values of 54 nM and 33 nM, respectively. Vortioxetine’s binding affinity is dose-proportional: Raising the dose will cause more binding to the receptors of interest at an increase of 15% for every 5 mg up to the maximum dosage.   Based on the receptor binding affinities, vortioxetine displays reuptake blockade of the serotonin transporter, agonist activity at the 5-HT1A receptor, partial agonist activity at the 5-HT1B receptor, and antagonism at the 5-HT1D, 5-HT7, and 5-HT3 receptors. It has not been determined whether the antidepressant effects of vortioxetine are related to its binding at various 5-HT receptors.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      indicationTitel:
        ' is approved for MDD in adults with a starting dose of 10 mg a day and can be increased to 20 mg a day. Providers may consider 5 mg a day for patients who cannot tolerate higher doses. Vortioxetine can be discontinued abruptly, but a decrease to 10 mg a day is recommended for patients who are on 15 mg a day or more for one week before complete discontinuation.10 Vortioxetine is in pregnancy category C. There is no data on its effects with breastfeeding.',
    },
    {
      sno: 3,
      id: 'alogliptin-benzoate-api-manufacturers-in-india',
      productName: 'Alogliptin Benzoate',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '850649-62-6',
      details: 'Know More',

      name: 'Alogliptin Benzoate',
      image: '../../../assets/images/proucts2/alogliptin-benzoate-3.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '850649-62-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '2 7',
          letter3: 'N',
          number3: '5',
          letter4: 'O',
          number4: '4',
        },
        MolecularWeight: '461.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Increased concentrations of the incretin hormones such as glucagon-like peptide-1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP) are released into the bloodstream from the small intestine in response to meals. These hormones cause insulin release from the pancreatic beta cells in a glucose-dependent manner but are inactivated by the dipeptidyl peptidase-4 (DPP-4) enzyme within minutes. GLP-1 also lowers glucagon secretion from pancreatic alpha cells, reducing hepatic glucose production. In patients with type 2 diabetes, concentrations of GLP-1 are reduced but the insulin response to GLP-1 is preserved. Alogliptin is a DPP-4 inhibitor that slows the inactivation of the incretin hormones, thereby increasing their bloodstream concentrations and reducing fasting and postprandial glucose concentrations in a glucose-dependent manner in patients with type 2 diabetes mellitus. Alogliptin selectively binds to and inhibits DPP-4 but not DPP-8 or DPP-9 activity in vitro at concentrations approximating therapeutic exposures.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'NESINA is a dipeptidyl peptidase-4 (DPP-4) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.',
        },
      ],
    },
    {
      sno: 4,
      id: 'canagliflozin-api-manufacturers-in-india',
      productName: 'Canagliflozin',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '842133-18-0',
      details: 'Know More',

      name: 'Canagliflozin',
      image: '../../../assets/images/proucts2/canagliflozin-4.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '842133-18-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 4',
          letter2: 'H',
          number2: '2 5',
          letter3: 'F O',
          number3: '5',
          letter4: 'S',
        },
        MolecularWeight: '444.52 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Sodium-glucose co-transporter 2 (SGLT2), expressed in the proximal renal tubules, is responsible for the majority of the reabsorption of filtered glucose from the tubular lumen. Canagliflozin is an inhibitor of SGLT2. By inhibiting SGLT2, canagliflozin reduces reabsorption of filtered glucose and lowers the renal threshold for glucose (RTG), and thereby increases urinary glucose excretion (UGE).',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'This drug is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
        },
        {
          point3:
            'Another indication for canagliflozin is the prevention of major cardiovascular events (myocardial infarction, stroke, or death due to a cardiovascular cause) in patients with type 2 diabetes, as well as hospitalization for heart failure in patients with type 2 diabetes.',
        },
      ],
    },

    {
      sno: 6,
      id: 'ertugliflozin-api-manufacturers-in-india',
      productName: 'Ertugliflozin L-PGA',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '1210344-57-2',
      details: 'Know More',

      name: 'Ertugliflozin',
      image: '../../../assets/images/proucts2/ertugliflozin-6.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '1210344-57-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '2 5',
          letter3: 'C l O',
          number3: '7',
        },
        MolecularWeight: '436.89 g·mol−1',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Ertugliflozin inhibits SGLT2 that is found in the kidneys. SGLT2 is the predominant transporter responsible for the resorption of glucose back into circulation from glomerular filtrate. Ertugliflozin inhibits the reabsorption of glucose mediated by this specific transporter, which increases the renal excretion of glucose and helps decrease glucose levels in circulation.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'Ertugliflozin is a sodium glucose co-transporter 2 (SGLT2) inhibitor indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.Steglatro contains ertugliflozin L-pyroglutamic acid in film-coated oral tablets.',
        },
      ],
    },
    {
      sno: 7,
      id: 'trelagliptin-succinate-api-manufacturers-in-india',
      productName: 'Trelagliptin Succinate',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antidiabetic',
      casNumber: '1029877-94-8',
      details: 'Know More',

      name: 'Trelagliptin Succinate',
      image: '../../../assets/images/proucts2/Trelagliptin-Succinate-7.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '1029877-94-8',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '2 6',
          letter3: 'F N',
          number3: '5',
          letter4: 'O',
          number4: '6',
        },
        MolecularWeight: '475.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction1: `
        Trelagliptin is a selective, competitive and reversible inhibitor of dipeptidyl peptidase-4 (DPP-4) (Ki=1.5 nM, dissociation t1/2= 29 min).
        `,
      MechanismOfAction2:
        ' By specific inhibition of DDP-4 activity (IC50=1.3 nM for human recombinant ddp-4), trelagliptin prevented the degradation of incretin (GLP-1 and GIP) and prolonged half-life of active forms, resulting in release of insulin and decrease of blood glucose post prandial.',
      MechanismOfAction3:
        ' Trelagliptin was highly selective DDP-4 inhibitor, which showed >10,000 fold lower inhibitory potency against the other peptidases: DPP-8, DPP-9, DPP-II, PEP or FAPα.',
      MechanismOfAction4:
        ' Trelagliptin showed no significantly inhibition up to 10 μM in a screening against a panel of 47 enzymes and 79 receptors, ion channels and transporter in vitro.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'It is a highly selective dipeptidyl peptidase-4 inhibitor that is typically used as an add on treatment when the first line treatment of metformin is not achieving the expected glycemic goals; though it has been approved for use as a first line treatment when metformin cannot be used.',
        },
      ],
    },

    {
      sno: 9,
      id: 'topiroxostat-api-manufacturers-in-india',
      productName: 'Topiroxostat',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antihyperuricemic(Gout)',
      casNumber: '577778-58-6',
      details: 'Know More',

      name: 'Topiroxostat',
      image: '../../../assets/images/proucts2/Topiroxostat-9.png',
      productDescription: {
        Therapeutic: 'Antigout',
        CASNumber: '577778-58-6',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 3',
          letter2: 'H',
          number2: '8',
          letter3: 'N',
          number3: '6',
        },
        MolecularWeight: '248.24 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Pipeline',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Uric acid synthesis depends on the action of xanthine oxidase activity in the conversion of hypoxanthine to xanthine, followed by the conversion of xanthine to uric acid. Xanthine oxidase consists of a molybdenum ion as cofactor in the active center that has different redox states upon substrate binding.When a substrate such as hypoxanthine or xanthine binds, xanthine oxidase hydroxylates it and molybdenum ion is reduced from hexavalent, Mo(VI), to tetravalent form, Mo(IV). Molybdenum ion is reoxidized into hexavalent state once the hydroxylated substrate, xanthine or uric acid, dissociates from the active site. Topiroxostat is shown to interact with multiple amino acid residues of the solvent channel and additionally forms a reaction intermediate by covalent binding with molybdenum (IV) ion via an oxygen atom.It also forms hydrogen bonds with molybdenum (VI) ion, suggesting that it has multiple inhibition modes to xanthine oxidase.Enhanced binding interactions to xanthine oxidase achieves delayed dissociation of topiroxostat from the enzyme. 2-hydroxy-topiroxostat, the metabolite formed by primary hydroxylation of topiroxostat by xanthine oxidase, also causes time and concentration-dependent inhibition of the enzyme.Topiroxostat is shown to inhibit ATP-binding cassette transporter G2 (ABCG2) in vitro, which is a membrane protein responsible for recovering uric acid in the kidneys and secreting uric acid from the intestines.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3: 'Indicated for the treatment of gout and hyperurcemia. ',
        },
      ],
    },

    {
      sno: 11,
      id: 'apremilast-api-manufacturers-in-india',
      productName: 'Apremilast',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antipsoariatic',
      casNumber: '608141-41-9',
      details: 'Know More',

      name: 'Apremilast',
      image: '../../../assets/images/proucts2/Apremilast-11.png',
      productDescription: {
        Therapeutic: 'Antipsoriasis',
        CASNumber: '608141-41-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 2',
          letter2: 'H',
          number2: '2 4',
          letter3: 'N',
          number3: '2',
          letter4: 'O',
          number4: '7',
          letter5: 'S',
        },
        MolecularWeight: '460.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Pipeline ',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Apremilast is an oral small-molecule inhibitor of phosphodiesterase 4 (PDE4) specific for cyclic adenosine monophosphate (cAMP). PDE4 inhibition results in increased intracellular cAMP levels. The specific mechanism(s) by which apremilast exerts its therapeutic action is not well defined.',
      companyName: 'Metrochem API Pvt Ltd',
      indicationTitel:
        'OTEZLA, an inhibitor of phosphodiesterase 4 (PDE4), is indicated for the treatment of:',
      Indicationtitel1: 'Indication:',
      Indication: [
        {
          point1: 'Adult patients with active  psoriatic arthritis ',
        },
        {
          point1:
            'Patients with moderate to severe plaque psoriasis who are candidates for phototherapy or systemic therapy ',
        },
        {
          point1:
            'Adult patients with oral ulcers associated with Behçet’s Disease',
        },
      ],
    },


    {
      sno: 14,
      id: 'molnupiravir-api-manufacturers-in-india',
      productName: 'Molnupiravir',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-1.png',
      CEP: '../../../assets/images/logo/web-icons-1.png',
      therapeuticCategory: 'Antiviral',
      casNumber: '2349386-89-4',
      details: 'Know More',

      name: 'Molnupiravir',
      image: '../../../assets/images/proucts2/Molnupiravir-14.png',
      productDescription: {
        Therapeutic: 'Antiviral',
        CASNumber: ' 2349386-89-4',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 3',
          letter2: 'H',
          number2: '1 9',
          letter3: 'N',
          number3: '3',
          letter4: 'O',
          number4: '7',
        },
        MolecularWeight: ' 329.31',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Pipeline',
      },

      companyName: 'Metrochem API Pvt Ltd',
    },
    {
      sno: 15,
      id: 'crisaborole-api-manufacturers-in-india',
      productName: 'Crisaborole',
      DMF: '../../../assets/images/logo/web-icons-2.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Atopic Dermatitis',
      casNumber: '906673-24-3',
      details: 'Know More',

      name: 'Crisaborole',
      image: '../../../assets/images/proucts2/Crisaborole-15.png',
      productDescription: {
        Therapeutic: ' Atopic Dermatitis',
        CASNumber: ' 906673-24-3',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 4',
          letter2: 'H',
          number2: '1 0',
          letter3: 'B N O',
          number3: '3',
        },
        MolecularWeight: '251.05 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Ointment',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Crisaborole is a phosphodiesterase-4 (PDE-4) inhibitor. PDE-4 inhibition results in increased intracellular cyclic adenosine monophosphate (cAMP) levels. The specific mechanism(s) by which crisaborole exerts its therapeutic action is not well defined.',
      companyName: 'Metrochem API Pvt Ltd',
    },
    {
      sno: 16,
      id: 'fingolimod-hcl-api-manufacturers-in-india',
      productName: 'Fingolimod Hydrochloride',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Multiple Sclerosis/Immunomodulator',
      casNumber: '162359-56-0',
      details: 'Know More',

      name: 'Fingolimod Hydrochloride',
      image: '../../../assets/images/proucts2/fingolimod-hcl-16.png',
      productName1: 'Fingolimod ',
      productDescription: {
        Therapeutic: 'Multiple sclerosis/Immunomodulator',
        CASNumber: '162359-56-0',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 9',
          letter2: 'H',
          number2: '3 4',
          letter3: 'C l N O',
          number3: '2',
        },
        MolecularWeight: '343.9 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        ' is metabolized by sphingosine kinase to the active metabolite, fingolimod-phosphate. Fingolimod-phosphate is a sphingosine 1-phosphate receptor modulator, and binds with high affinity to sphingosine 1-phosphate receptors 1, 3, 4, and 5. Fingolimod-phosphate blocks the capacity of lymphocytes to egress from lymph nodes, reducing the number of lymphocytes in peripheral blood. The mechanism by which fingolimod exerts therapeutic effects in multiple sclerosis is unknown, but may involve reduction of lymphocyte migration into the central nervous system.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      indicationTitel:
        'is a sphingosine 1-phosphate receptor modulator indicated for the treatment of patients with relapsing forms of multiple sclerosis to reduce the frequency of clinical exacerbations and to delay the accumulation of physical disability.',
    },
    {
      sno: 17,
      id: 'elagolix-sodium-api-manufacturers-in-india',
      productName: 'Elagolix Sodium',
      DMF: '../../../assets/images/logo/web-icons-1.png',
      USDMF: '../../../assets/images/logo/web-icons-2.png',
      CEP: '../../../assets/images/logo/web-icons-2.png',
      therapeuticCategory: 'Pain associated with Endometriosis',
      casNumber: '832720-36-2',
      details: 'Know More',

      name: 'Elagolix Sodiume',
      image: '../../../assets/images/proucts2/elagolix-sodium-17.png',
      productDescription: {
        Therapeutic: 'Dysmenorrhea / uterine fibroid',
        CASNumber: '832720-36-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '3 2',
          letter2: 'H',
          number2: '2 9',
          letter3: 'F',
          number3: '5',
          letter4: 'N',
          number4: '3',
          letter5: 'N a O',
          number5: '5',
        },
        MolecularWeight: '653.6 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: 'Tablet',
        MetrochemDevelopmentStatus: 'Commercial',
        extra:
          'Metrochem API Pvt Ltd is well known as one of the best Elagolix Sodium API manufacturers in India.Engaged in quality production activities Active Pharmaceutical Ingredients (API ‘S), Pellets and Intermediates at an affordable price, in accordance with regulatory standards procedures.We have a quality focused process and highly dedicated people to ensure the safety and reliability of our products.',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'ORILISSA is a GnRH receptor antagonist that inhibits endogenous GnRH signaling by binding competitively to GnRH receptors in the pituitary gland. Administration of ORILISSA results in dose-dependent suppression of luteinizing hormone (LH) and follicle-stimulating hormone (FSH), leading to decreased blood concentrations of the ovarian sex hormones, estradiol and progesterone.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication: [
        {
          point1:
            'This medication is used by women to help relieve moderate to severe pain due to a disorder called endometriosis.Endometriosis is tissue growth that usually lines the interior of the womb ( uterus) at a particular location, such as on the outer surface of the uterus, on the ovaries, or on other organs.',
        },
        {
          point1:
            'This disorder may cause symptoms such as menstrual cycles which are painful / heavy / irregular, pain during or after pregnancy, or infertility. Elagolix works by reducing the development of certain hormones (luteinizing hormone, follicle-stimulating hormone) in your body, which results in lower levels of female sex hormones (estrogens). Such lower levels can help to alleviate some endometriosis symptoms.',
        },
      ],
    },
    {
      sno: 18,
      id: 'eltrombopag-api-manufacturers-in-india',
      productName: 'Eltrombopag',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Thrombocytopenia',
      casNumber: '496775-61-2',
      details: 'Know More',

      name: 'Eltrombopag',
      image: '../../../assets/images/proucts2/Eltrombopag-18.png',
      productDescription: {
        Therapeutic: 'Thrombocytopenia',
        CASNumber: '496775-61-2',
        MolecularFormula: {
          letter1: 'C',
          number1: '2 5',
          letter2: 'H',
          number2: '2 2',
          letter3: 'N',
          number3: '4',
          letter4: 'O',
          number4: '4',
        },
        MolecularWeight: '442.5 g/mol',
        MeshSize: 'As per Customer Requirement',
        MetrochemDevelopmentStatus: 'Wishlist',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction:
        'Eltrombopag is an orally bioavailable, small-molecule TPO-receptor agonist that interacts 485 with the transmembrane domain of the human TPO-receptor and initiates signaling cascades that 486 induce proliferation and differentiation from bone marrow progenitor cells.',
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point1:
            'Treatment of Thrombocytopenia in Patients with Chronic ITP PROMACTA is indicated for the treatment of thrombocytopenia in adult and pediatric patients 1 year and older with chronic immune (idiopathic) thrombocytopenia (ITP) who have had an insufficient response to corticosteroids, immunoglobulins, or splenectomy.',
        },
        {
          point1:
            'Treatment of Thrombocytopenia in Patients with Hepatitis C Infection PROMACTA is indicated for the treatment of thrombocytopenia in patients with chronic hepatitis C to allow the initiation and maintenance of interferon-based therapy.',
        },
        {
          point1:
            'Treatment of Severe Aplastic Anemia PROMACTA is indicated for the treatment of patients with severe aplastic anemia who have had an insufficient response to immunosuppressive therapy.',
        },
      ],
    },

    {
      sno: 20,
      id: 'cenobamate-api-manufacturers-in-indi',
      productName: 'Cenobamate',
      DMF: '../../../assets/images/logo/web-icons-3.png',
      USDMF: '../../../assets/images/logo/web-icons-3.png',
      CEP: '../../../assets/images/logo/web-icons-3.png',
      therapeuticCategory: 'Antiepileptic',
      casNumber: '71699-050-30',
      details: 'Know More',

      name: 'Cenobamate',
      image: '../../../assets/images/proucts2/Cenobamate-20.png',
      productDescription: {
        Therapeutic: 'Antidiabetic',
        CASNumber: '913088-80-9',
        MolecularFormula: {
          letter1: 'C',
          number1: '1 0',
          letter2: 'H',
          number2: '1 0',
          letter3: 'C l N',
          number3: '5',
          letter4: 'O',
          number4: '2',
        },
        MolecularWeight: '267.67 g/mol',
        MeshSize: 'As per Customer Requirement',
        Form: ' Injectable, Tablet',
        MetrochemDevelopmentStatus: 'Wishlist',

        companyName4: 'Metrochem API Pvt Ltd',
        text1: 'is one of the well-known ',
        manufacturers: 'Cenobamate Manufacturers in India.',

        extra:
          ' We have well-defined quality policies and our products undergo strict quality check in every stage of manufacturing at our factories. Our products meet international quality standards and exports worldwide.',
      },
      MechanismTitel: 'Mechanism of Action:',
      MechanismOfAction: `
      The precise mechanism by which cenobamate exerts its therapeutic effects
      in patients with partialonset seizures is unknown. Cenobamate has been
      demonstrated to reduce repetitive neuronal firing by inhibiting voltage-gated
      sodium currents. It is also a positive allosteric modulator of the γ-aminobutyric acid
      (GABAA) ion channel.
      `,
      companyName: 'Metrochem API Pvt Ltd',
      Indicationtitel1: 'Indication:',
      Indication3: [
        {
          point3:
            'XCOPRI is indicated for the treatment of partial-onset seizures in adult patients',
        },
      ],
    },
  ];

  underValidation() {
    return of(this.underValidationProducts);
  }


development = [
  {
    id: 1,
    productName: 'Acotiamide Hydrochloride',
    labValidation: '',
    scaleUp: '',
    processValidation: '../../../assets/images/logo/web-icons-1.png',
    therapeuticCategory: 'Gastroprokinetic',
    casNumber: '773092-05-0',

  },
  {
    id: 2,
    productName: 'Fenticonazole Nitrate',
    labValidation: '',
    scaleUp: '',
    processValidation: '../../../assets/images/logo/web-icons-1.png',
    therapeuticCategory: 'Antifungal',
    casNumber: '73151-29-8',

},
{
  id: 3,
  productName: 'Lercanidipine Hydrochloride	',
  labValidation: '',
  scaleUp: '',
  processValidation: '../../../assets/images/logo/web-icons-1.png',
  therapeuticCategory: 'Antihypertensive’s',
  casNumber: '132866-11-6',

},
{
  id: 4,
  productName: 'Efinaconazole',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Antifungal',
  casNumber: '164650-44-6',

},
{
  id: 5,
  productName: 'Epalrestat',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Diabetic neuropathy',
  casNumber: '82159-09-9',

},
{
  id: 6,
  productName: 'Gliclazide',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Antidiabetic',
  casNumber: '21187-98-4',

},
{
  id: 7,
  productName: 'Lifitegrast',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Dry Eye Disease',
  casNumber: '1025967-78-5',

},
{
  id: 8,
  productName: 'Omecamtiv Mecarbil',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Chronic Heart Failure',
  casNumber: '873697-71-3',

},
{
  id: 9,
  productName: 'Rimegepant',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Antimigraine',
  casNumber: '1289023-67-1',

},
{
  id: 10,
  productName: 'Siponimod',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Multiple sclerosis',
  casNumber: '1230487-00',

},
{
  id: 11,
  productName: 'Upadacitinib Tartrate',
  labValidation: '',
  scaleUp: '../../../assets/images/logo/web-icons-1.png',
  processValidation: '',
  therapeuticCategory: 'Antirheumatic',
  casNumber: '1607431-21-9',

},
{
  id: 12,
  productName: 'Brexpiprazole',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antipsychotic',
  casNumber: '913611-97-9',

},
{
  id: 13,
  productName: 'Brivaracetam',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antiepileptic',
  casNumber: '357336-20-0',

},
{
  id: 14,
  productName: 'Candesartan',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antirheumatic',
  casNumber: '139481-59-7',

},
{
  id: 15,
  productName: 'Ezetimibe',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antihyperlipidemic',
  casNumber: '163222-33-1',

},
{
  id: 16,
  productName: 'Faropenem',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antibiotic',
  casNumber: '122547-49-3',

},
{
  id: 17,
  productName: 'Ferric maltol',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antianemic',
  casNumber: '33725-54-1',

},
{
  id: 18,
  productName: 'Fexuprazan',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antiulcerative',
  casNumber: '1902954-60-2',

},
{
  id: 19,
  productName: 'L-Glutamine',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Sickle Cell Anemia',
  casNumber: '56-85-9',

},
{
  id: 20,
  productName: 'Lisinopril',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antihypertensive',
  casNumber: '76547-98-3',

},
{
  id: 21,
  productName: 'Mavacamten',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Hypertrophic Cardiomyopathy',
  casNumber: '1642288-47-8',

},
{
  id: 22,
  productName: 'Niclosamide',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Anthelmintic',
  casNumber: '50-65-7',

},
{
  id: 23,
  productName: 'Ponesimod',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Multiple Sclerosis/Immunomodulator',
  casNumber: '854107-55-4',

},
{
  id: 24,
  productName: 'Relugolix',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Uterine Leiomyoma',
  casNumber: '737789-87-6',

},
{
  id: 25,
  productName: 'Rivaroxaban',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antithrombotic / Anticoagulant',
  casNumber: '366789-02-8',

},
{
  id: 26,
  productName: 'Selexipag',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Pulmonary Artery Hypertension',
  casNumber: '475086-01-2',

},
{
  id: 27,
  productName: 'Tegoprazan',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Antiulcerative',
  casNumber: '942195-55-3',

},
{
  id: 28,
  productName: 'Vericiguat',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Heart Failure',
  casNumber: '1350653-20-1',

},
{
  id: 29,
  productName: 'Vibegron',
  labValidation: '../../../assets/images/logo/web-icons-1.png',
  scaleUp: '',
  processValidation: '',
  therapeuticCategory: 'Overactive Bladder',
  casNumber: '1190389-15',

},

]

developmentPipelineDetails() {
  return of(this.development);
}

pellets = [
  {
    id: 1,
    productName: 'Omeprazole Pellets - 7.5%, 8.5%, 10%, 12.5%, 15%, 20%, 25%, etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 2,
    productName: 'Esomeprazole Magnesium Pellets - 8.5%, 10%, 15%, 22.5%, 23.5%, 26.67% etc',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 3,
    productName: 'Esomeprazole Dihydrate Pellets - 8.5%, 10%, 15%, 22.5% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 4,
    productName: 'Lansoprazole Pellets - 6%, 7.5%, 8.5%, 10%, 10.5%, 11%, 11.2%, 11.5%, 12%, 14% etc.',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 5,
    productName: 'Rabeprazole Pellets - 7.5%, 8.5%, 13.33%, 15%, 17%, 20%, 22.5% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 6,
    productName: 'Pantoprazole Pellets - 15%, 21%, 22.5% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },

  {
    id:7,
    productName: 'S-Pantoprazole Pellets - 20% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 8,
    productName: 'Dexrabeprazole Pellets - 8.5%, 10%, 15% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 9,
    productName: 'Dexlansoprazole Pellets - 8.5%, 10% etc.,',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 10,
    productName: 'Tenatoprazole Pellets',
    therapeuticCategory: 'Antiulcerative',
  },
  {
    id: 11,
    productName: 'Omeprazole (EC) & Domperidone (SR)',
    therapeuticCategory: 'Blended / Combination Pellets',
  },
  {
    id: 12,
    productName: 'Pantoprazole Sodium (EC) & Domperidone IR & SR',
    therapeuticCategory: 'Blended / Combination Pellets',
  },
  {
    id: 13,
    productName: 'Rabeprazole Sodium (EC) & Domperidone (SR)',
    therapeuticCategory: 'Blended / Combination Pellets',
  },
  {
    id: 14,
    productName: 'Esomeprazole Magnesium (EC) & Domperidone (SR)',
    therapeuticCategory: 'Blended / Combination Pellets',
  },
  {
    id: 15,
    productName: 'Domperidone Pellets 10%, 20%, 30%, 40%',
    therapeuticCategory: 'Antiemetic',
  },
  {
    id: 16,
    productName: 'Domperidone (SR) Pelles - 10%, 20%, 30%, 40%',
    therapeuticCategory: 'Antiemetic',
  },
  {
    id: 17,
    productName: 'Itopride HCl (SR) Pellets - 60%',
    therapeuticCategory: 'Gastroprokinetic',
  },
  {
    id: 18,
    productName: 'Cinitapride Pellets',
    therapeuticCategory: 'Gastroprokinetic',
  },
  {
    id: 19,
    productName: 'Diclofenac Sodium Pellets (SR) - 40%, 50%',
    therapeuticCategory: 'Anti inflammatory',
  },
  {
    id: 20,
    productName: 'Diclofenac Potassium Pellets (SR) - 40%, 50%',
    therapeuticCategory: 'Anti inflammatory',
  },
  {
    id: 21,
    productName: 'Ketoprofen Pellets (SR) - 70%',
    therapeuticCategory: 'Anti inflammatory',
  },
  {
    id: 22,
    productName: 'Itraconazole Pellets - 20%, 22%',
    therapeuticCategory: 'Antifungal',
  },
  {
    id: 23,
    productName: 'Terbinafine Hcl Pellets',
    therapeuticCategory: 'Antifungal',
  },
  {
    id: 24,
    productName: 'Aspirin Pellets - 30%, 50%, 60%',
    therapeuticCategory: 'Antiplatelet',
  },
  {
    id: 25,
    productName: 'Clopidogrel Pellets - 30%, 50%, 60%',
    therapeuticCategory: 'Antiplatelet',
  },
  {
    id: 26,
    productName: 'Venlafaxine HCI Pellets (SR) - 25%, 33%, 35%',
    therapeuticCategory: 'Antidepressant',
  },
  {
    id: 27,
    productName: 'Fluoxetine HCI Pellets 70%',
    therapeuticCategory: 'Antidepressant',
  },
  {
    id: 28,
    productName: 'Levomilnacipran Hcl Pellets',
    therapeuticCategory: 'Antidepressant',
  },
  {
    id: 29,
    productName: 'Diltiazem HCI Pellets 50%',
    therapeuticCategory: 'Antihypertensive',
  },
  {
    id: 30,
    productName: 'Metoprolol Succinate Pellets 50%, 60%',
    therapeuticCategory: 'Antihypertensive',
  },
  {
    id: 31,
    productName: 'Nicardipine Pellets',
    therapeuticCategory: 'Antihypertensive',
  },
  {
    id: 32,
    productName: 'Telmisartan Pellets',
    therapeuticCategory: 'Antihypertensive',
  },
  {
    id: 33,
    productName: 'Flurbiprofen Pellets 57 .1 4%',
    therapeuticCategory: 'Analgesic',
  },
  {
    id: 34,
    productName: 'Indomethacin Pellets 20%',
    therapeuticCategory: 'Analgesic',
  },
  {
    id: 35,
    productName: 'Donepezil pellets',
    therapeuticCategory: "Alzheimer's disease (AD)",
  },
  {
    id: 36,
    productName: 'Galantamine Pellets',
    therapeuticCategory: "Alzheimer's disease (AD)",
  },
  {
    id: 37,
    productName: 'Atorvastatin Pellets 7.5%, 10.0%',
    therapeuticCategory: 'Antihyperlipidemic',
  },
  {
    id: 38,
    productName: 'Fenofibrate Pellets',
    therapeuticCategory: 'Antihyperlipidemic',
  },
  {
    id: 39,
    productName: 'Levosulpiride Pellets - 50%',
    therapeuticCategory: 'Antipsychotic/Gastroprokinetic',
  },
  {
    id: 40,
    productName: 'Duloxetine EC Pellets 16%, 17%, 20%',
    therapeuticCategory: 'Antipsychotic',
  },
  {
    id: 41,
    productName: 'Tamsulosin Pellets (SR) - 0.12%, 0.2%,',
    therapeuticCategory: 'Benign Prostatic Hypertrophy',
  },
  {
    id: 42,
    productName: 'Silodosin Pellets - 2%, 4%',
    therapeuticCategory: 'Benign Prostatic Hypertrophyr',
  },
  {
    id: 43,
    productName: 'Dutasteride Pellets 0.5%',
    therapeuticCategory: 'Benign Prostatic Hyperplasia (BPH)',
  },
  {
    id: 44,
    productName: 'Iron poly maltose pellets',
    therapeuticCategory: 'Iron Deficiency Anaemia',
  },
  {
    id: 45,
    productName: 'Ferrous Sulphate & Folic acid pellets',
    therapeuticCategory: 'Iron Deficiency Anaemia',
  },
  {
    id: 46,
    productName: 'Dabigatran Etexilate Mesylate Pellets - 40%',
    therapeuticCategory: 'Antithrombotic / Anticoagulant',
  },
  {
    id: 47,
    productName: 'Mebeverine Pellets (SR) - 20%, 40%',
    therapeuticCategory: 'Antispasmodics',
  },
  {
    id: 48,
    productName: 'Orlistat Pellets - 50%',
    therapeuticCategory: 'Anti Obesity',
  },
  {
    id: 49,
    productName: 'Aprepitant pellets',
    therapeuticCategory: 'Antiemetic',
  },
  {
    id: 50,
    productName: 'Budesonide Pellets (SR) - 1.0%',
    therapeuticCategory: 'Antiasthmatic',
  },
  {
    id: 51,
    productName: 'Ciprofloxacin Pellets 20%',
    therapeuticCategory: 'Antibiotic',
  },
  {
    id: 52,
    productName: 'Pregabalin Pellets 50%',
    therapeuticCategory: 'Antiepileptic/DPN/Fibromyalgia',
  },
  {
    id: 53,
    productName: 'Theophylline Pellets 70%',
    therapeuticCategory: 'Antiasthmatic/COPD',
  },
  {
    id: 54,
    productName: 'Tizanidine HCI Pellets (SR) - 3.5%',
    therapeuticCategory: 'Muscle Relaxants',
  },
  {
    id: 55,
    productName: 'Tamsulosin & Dutasteride Pellets',
    therapeuticCategory: 'BPH(Blended/Combination Pellets)',
  },
  {
    id: 56,
    productName: 'Oxeladin Pellets',
    therapeuticCategory: 'Cough Suppressant',
  },
  {
    id: 57,
    productName: 'Mesalamine Pellets',
    therapeuticCategory: 'Inflammatory bowel Disease (IBD)',
  },
  {
    id: 58,
    productName: 'Tacrolimus Pellets',
    therapeuticCategory: 'Immunosuppressant',
  },
  {
    id: 59,
    productName: 'Tramadol HCI Pellets 10%',
    therapeuticCategory: 'Opioid analgesic',
  },
  {
    id: 60,
    productName: 'Tolterodine Tartrate Pellets 2.0%',
    therapeuticCategory: 'Overactive bladder',
  },
  {
    id: 61,
    productName: 'Combination & speciality Pellets',
    therapeuticCategory: 'Other Pellets',
  },
  {
    id: 62,
    productName: 'Taste Masking Pellets',
    therapeuticCategory: 'Other Pellets',
  },
  {
    id: 63,
    productName: 'Mups',
    therapeuticCategory: 'Other Pellets',
  },
  {
    id: 64,
    productName: 'Micro granules - for direct compression',
    therapeuticCategory: 'Other Pellets',
  },
  {
    id: 65,
    productName: 'Any Other Pellets can be developed on request',
    therapeuticCategory: 'Other Pellets',
  },


]

pelletsDetailes(){
  return of(this.pellets)
}

Intermediates = [
  {
    id: 1,
    productName: 'Ethyl2-[(2,4,5-trimethoxybenzoyl)amino]-1,3-thiazole-4-carboxylate',
    casNumber: '397277-84-8',
  },
  {
    id: 2,
    productName: '2-((6-Chloro-2,4-dioxo-3,4-dihydro-2H-pyrimidin-1-yl)methyl)benzonitrile',
    casNumber: '895758-95-8',
  },
  {
    id: 3,
    productName: '2-[(6-Chloro-3,4-dihydro-3-methyl-2,4-dioxo-1(2H)-pyrimidinyl)methyl]- benzonitrile',
    casNumber: '865758-96-9',
  },
  {
    id: 4,
    productName: 'N-Benzylaniline',
    casNumber: '103-32-2',
  },
  {
    id: 5,
    productName: 'N-Benzyl-N-(4,5-dihydro-1H-imidazol-2-ylmethyl)aniline',
    casNumber: '91-75-8',
  },
  {
    id: 6,
    productName: 'Ethyl6-​(4-​Aminophenyl)​-​1-​(4-methoxyphenyl)​-​7-​oxo-​4,​5,​6,​7-tetrahydro-​1H-pyrazolo[3,​4-​c]​pyridine-​3-​carboxylate',
    casNumber: '503615-07-4',
  },

  {
    id:7,
    productName: '2-Hydroxymethyl-4-(3- methoxypropoxy)-3- methylpyridine',
    casNumber: '118175-10-3',
  },
  {
    id: 8,
    productName: 'Methyl1-[(2’cynobiphenyl-4-yl)\methyl]-2-ethoxybenzimidazole-7-carboxylate',
    casNumber: '139481-44-0',
  },
  {
    id: 9,
    productName: '2-Ethoxy-[[2’-(hydroxyamidino) biphenyl-4-yl)methyl]-1-H-benzimidazole-7carboxylate',
    casNumber: '147403-65-4',
  },
  {
    id: 10,
    productName: '1-Methyl-[2’-(4,5-dihydro-5-oxo-4H-1,2,4-oxadiazol-3-yl)biphenyl-4-yl]-2-ethoxy-1-H-benzimidazole-7-carboxylate',
    casNumber: '147403-52-9',
  },
  {
    id: 11,
    productName: '1-[2’-(4,5-dihydro-5-oxo-4H-1,2,4-oxadiazol-3-yl)biphenyl-4-yl]-2-ethoxy-1-H-benzimidazole-7- carboxylic acid',
    casNumber: '147403-03-0',
  },
  {
    id: 12,
    productName: '(12aR)-7-(benzyloxy)-3,4,12,12a-tetrahydro-1H-[1,4]oxazino[3,4-c]pyrido[2,1-f][1,2,4]triazine-6,8-dione',
    casNumber: '1985607-70-2',
  },
  {
    id: 13,
    productName: '7,8-difluoro-6,11-dihydrodibenzo[b,e]thiepin-11-ol',
    casNumber: '1985607-83-7',
  },
  {
    id: 14,
    productName: '(R)-7-(benzyloxy)-12-((S)-7,8-difluoro-6,11-dihydrodibenzo[b,e]thiepin-11-yl)3,4,12,12a-tetrahydro-1H-[1,4]oxazino[3,4-c]pyrido[2,1-f][1,2’4]triazine-6,8- dione',
    casNumber: '1985606-53-8',
  },
  {
    id: 15,
    productName: '(R)-12-((S)-7,8-difluoro-6,11-dihydrodibenzo[b,e]thiepin-11-yl)3,4,12,12a-tetrahydro-1H-[1,4]oxazino[3,4-c]pyrido[2,1-f][1,2’4]triazine-6,8- dione',
    casNumber: '1985605-59-1',
  },
  {
    id: 16,
    productName: 'Ethyl7-bromo-2,2-dimethylheptanoate',
    casNumber: '123469-92-1',
  },
  {
    id: 17,
    productName: '8-hydroxy-2,2,14,14­ tetramethyl-pentadecanedioic acid',
    casNumber: '738606-46-7',
  },
  {
    id: 18,
    productName: 'Pyridine-2-carbaldehyde',
    casNumber: '1121-60-4',
  },
  {
    id: 19,
    productName: '1-bromo-4-chlorobenzene',
    casNumber: '1985605-59-1',
  },
  {
    id: 20,
    productName: 'Ethyl 4-hydroxycyclopiperidine-1- carboxylate',
    casNumber: '65214-82-6',
  },
  {
    id: 21,
    productName: '2-[(S)-(4-Chlorophenyl)(piperidin-4-yloxy)methyl]pyridine tartrate',
    casNumber: '210095-58-2',
  },
  {
    id: 22,
    productName: '2-(1-(4-(2-(4,5-Dihydro-4,4-dimethyloxazol-2-yl)propan-2-yl)phenethyl)piperidin-4-yl)-1H-benzimidazole',
    casNumber: '202189-81-9',
  },
  {
    id: 23,
    productName: '2-(2-(4-(2-(4-(1-(2-ethoxyethyl)-1H-benzo[d]imidazol-2-yl)piperidin-1-yl)ethyl)phenyl)propan-2-yl)-4,4-dimethyl-4,5-dihydrooxazole',
    casNumber: '202189-77-3',
  },
  {
    id: 24,
    productName: '5-Iodo-2-methylbenzoic acid',
    casNumber: '54811-38-0',
  },
  {
    id: 25,
    productName: '2-(4-fluorophenyl)-5-(5-iodo-2-methylbenzyl)thiophene',
    casNumber: '898566-17-1',
  },
  {
    id: 26,
    productName: '2,3,4,6-Tetrakis-O-trimethylsilyl-D-gluconolactone',
    casNumber: '32384-65-9',
  },
  {
    id: 27,
    productName: '(1S)-1,5-Anhydro-1-C-[3-[[5-(4-fluorophenyl)-2-thienyl]methyl]-4-methylphenyl]-D-glucitol 2,3,4,6-Tetraacetate',
    casNumber: '866607-35-4',
  },
  {
    id: 28,
    productName: '4(4-Amino-2-ethoxy-5-nitro-benzoylamino)-piperidine-1-carboxylic acid ethyl ester',
    casNumber: '952309-99-8',
  },
  {
    id: 29,
    productName: '4-Amino-2-ethoxy-5-nitro-N-piperidin-4-ylbenzamidedihydrobromide',
    casNumber: '1207859-14-0',
  },
  {
    id: 30,
    productName: '(S)-(+)-Ortho chloro phenyl phenyl)acetate',
    casNumber: '39720-27-9',
  },
  {
    id: 31,
    productName: '2-(2-thienyl)ethyl 4-methylbenzenesulfonate',
    casNumber: '40412-06-4',
  },
  {
    id: 32,
    productName: '(S)-Methyl-α-(2-thienylethylamino)(2-chlorophenyl)acetate hydrochloride',
    casNumber: '141109-18-4',
  },
  {
    id: 33,
    productName: '(S)-(+)Methyl -alpha-(2-thienyl ethyl amino)-(2- chlorophenyl) acetate HCl',
    casNumber: '141109-19-5',
  },
  {
    id: 34,
    productName: '4-(4-bromo-3-formylphenoxy)benzonitrile',
    casNumber: '906673-54-9',
  },
  {
    id: 35,
    productName: '4-(4-bromo-3-(hydroxymethyl)phenoxy) benzonitrile',
    casNumber: "906673-45-8",
  },
  {
    id: 36,
    productName: '4-(3-((1-ethoxyethoxy)methyl)-4-bromophenoxy)benzonitrile',
    casNumber: "N/A",
  },
  {
    id: 37,
    productName: '[(4-Cyanophenyl)amino]acetic acid',
    casNumber: '42288-26-6',
  },
  {
    id: 38,
    productName: 'Ethyl3-(pyridin-2-ylamino)propionate',
    casNumber: '103041-38-9',
  },
  {
    id: 39,
    productName: 'Ethyl3-{[3-amino-4-(methylamino)benzoyl](pyridin-2-yl)amino}propanoate',
    casNumber: '212322-56-0',
  },
  {
    id: 40,
    productName: 'Ethyl3-(2-((4-cyanophenylamino)methyl)-1-methyl-N-(pyridin-2-yl)-1H-benzo[d]imidazole-5-carboxamido)propanoate',
    casNumber: '211915-84-3',
  },
  {
    id: 41,
    productName: 'Ethyl-3-(2-((4-amidinophenylamino)methyl)-1-methyl-N-(pyridin2-yl)-1H-benzo[d]imidazole-5-carboxamido)propanoate',
    casNumber: '429658-95-7',
  },
  {
    id: 42,
    productName: 'Ethyl-3-[[[2-[[[4-[[[(hexyloxy)carbonyl]amino]iminomethyl]phenyl]amino]methyl]-1-methyl-1H- benzimidazol-5yl] carbonyl] (pyridin-2-yl) amino] propanoate',
    casNumber: '211915-06-9',
  },
  {
    id: 43,
    productName: '4-(5-Bromo-2-chlorobenzyl) phenyl ethyl ether',
    casNumber: '461432-23-5',
  },
  {
    id: 44,
    productName: '(2R,3R,4R,5S,6S)-2-(Acetoxymethyl)-6-(4-chloro-3-(4-ethoxybenzyl)phenyl)tetra hydro-2H-pyran-3,4,5-triyl triacetate',
    casNumber: '461432-25-7',
  },
  {
    id: 45,
    productName: '(2RS)-2-(3-Benzoylphenyl)propanamide',
    casNumber: '59512-16-2',
  },
  {
    id: 46,
    productName: '(S)-2-(3-benzoylphenyl) propanoic acid n-octyl-d-glucamine salt',
    casNumber: '22161-81-5 & 23323-37-7',
  },
  {
    id: 47,
    productName: '(2S)-2-(3-benzoylphenyl) propanoic acid',
    casNumber: '22161-81-5',
  },
  {
    id: 48,
    productName: '2-Hydroxymethyl-3-methyl-4-(2,2,2-trifluoroethoxy)pyridine hydrochloride',
    casNumber: '103577-66-8',
  },
  {
    id: 49,
    productName: '2-Chloromethyl-3-methyl-4-(2,2,2-trifluoroethoxy)pyridine HCl',
    casNumber: '127337-60-4',
  },
  {
    id: 50,
    productName: '2-[[(3-Methyl-4-(2,2,2- trifluoroethoxy)- 2-pyridinyl)methyl]thio]- 1H-benzimidazole',
    casNumber: '103577-40-8',
  },
  {
    id: 51,
    productName: '2-Mercapto-1H-benzimidazole',
    casNumber: '583-39-1',
  },
  {
    id: 52,
    productName: 'L(+)Diethyl tartrate',
    casNumber: '87-91-2',
  },
  {
    id: 53,
    productName: '2-[2-(Dimethylamino)ethyl]indan-1-one',
    casNumber: '3409-21-0',
  },
  {
    id: 54,
    productName: 'Ethyl2-((5-chloropyridin-2-yl)amino)-2-oxoacetate hydrochloride',
    casNumber: '1243308-37-3',
  },
  {
    id: 55,
    productName: '5-Methyl-4,5,6,7-tetrahydrothiazolo[5,4-c]pyridine-2-carboxylic Acid Hydrochloride',
    casNumber: '720720-96-7',
  },
  {
    id: 56,
    productName: 'Tert-butyl[(1R,2S,5S)-2-amino-5-(dimethylamino)carbonylcyclohexyl]carbamate',
    casNumber: '365998-36-3',
  },
  {
    id: 57,
    productName: '1-(2-fluoro-6-(trifluoromethyl)benzyl)-3-((R)-2-amino-2-phenylethyl)-5-(2-fluoro-3-methoxyphenyl)-6-methyl pyrimidine-2,4(1H,3H)-dione',
    casNumber: '830346-50-4',
  },
  {
    id: 58,
    productName: '(3S)-Tetrahydrofuran-3-ol',
    casNumber: '453-20-3',
  },
  {
    id: 59,
    productName: '(3S)-3-[4-(5-bromo-2-chloro benzyl) phenoxy] tertahydrofuran%',
    casNumber: '915095-89-5',
  },
  {
    id: 60,
    productName: '(2R,3R,4R,5S,6S)-2-(Acetoxymethyl)-6-(4-chloro-3-(4-(((S)-tetrahydrofuran-3-yl)oxy)benzyl)phenyl)tetrahydro-2H-pyran-3,4,5-triylTriacetate3-(4-(((S)-tetrahydrofuran-3-yl)oxy)benzyl)phenyl)tetrahydro-2H-pyran-3,4,5-triyl Triacetate',
    casNumber: '915095-99-7',
  },
  {
    id: 61,
    productName: '((1R,2S,3S,4R,5S)-5-(3-(4-ethoxybenzyl)-4-chlorophenyl)-2,3,4-tris(benzyloxy)-6,8-dioxa-bicyclo(3.2.1)octan-1-yl)methanol',
    casNumber: 'N/A',
  },
  {
    id: 62,
    productName: '(1R,2S,3S,4R,5S)-1-(acetoxymethyl)-5-(4-chloro-3-(4-ethoxybenzyl)phenyl)-6,8-dioxa bicyclo[3,2,1]octane-2,3,4-triyltriacetate',
    casNumber: '1298086-18-6',
  },
  {
    id: 63,
    productName: '5-Methoxy-1H-benzimidazole-2-thiol',
    casNumber: '37052-78-1',
  },
  {
    id: 64,
    productName: '2-Hydroxymethyl-3,5-dimethyl-4-methoxy pyridine hydrochloride',
    casNumber: '96300-88-8',
  },
  {
    id: 65,
    productName: '2-Chloro methyl-3,5-dimethyl-4-methoxy pyridine hydrochloride',
    casNumber: '86604-75-3',
  },
  {
    id: 66,
    productName: '5-Methoxy-2-[[(4-methoxy-3,5-dimethyl-2-pyridinyl)methyl] thio]-1H-benzimidazole',
    casNumber: '73590-85-9',
  },
  {
    id: 67,
    productName: 'Diethyl Tartrate D(-)',
    casNumber: '13811-71-7',
  },
  {
    id: 68,
    productName: '1-{(6-Methyl-3-pyridyl)-2-(4-Methylsulfonyl)-phenyl}ethanone',
    casNumber: '221615-75-4',
  },
  {
    id: 69,
    productName: 'Ethyl-2-(4-hydroxyphenyl)-4-methyl-1,3-thiazole-5-carboxylate hydrochloride',
    casNumber: '399017-10-8',
  },
  {
    id: 70,
    productName: 'Ethyl-2-(3-formyl-4-hydroxyphenyl)-4-methylthiazole-5-carboxylate',
    casNumber: '161798-01-2',
  },
  {
    id: 71,
    productName: 'Ethyl-2-(3-((hydroxyimino)methyl)-4-isobutoxyphenyl)-4-methyl-5-thiazole carboxylate',
    casNumber: '1271738-74-9',
  },
  {
    id: 72,
    productName: 'Ethyl-2-(3-cyano-4-isobutoxyphenyl)-4-methyl-1,3-thiazole-5-carboxylate',
    casNumber: '160844-75-7s',
  },
  {
    id: 73,
    productName: '(RS)-1-(2,4-Dichlorophenyl)-2-(1H-imidazol-1-yl)ethanol',
    casNumber: '24155-42-8',
  },
  {
    id: 74,
    productName: '1-(Chloromethyl)-4-(phenylthio)benzene',
    casNumber: '1208-87-3',
  },
  {
    id: 75,
    productName: '1-(2,4-Dichlorophenyl)-2-(1H-imidazol-1-yl)ethanone',
    casNumber: '46503-52-0',
  },
  {
    id: 76,
    productName: 'Octanophenone',
    casNumber: '1674-37-9',
  },
  {
    id: 77,
    productName: '3-Nitro-1-(4-octylphenyl)propane-1-one',
    casNumber: '899822-97-0',
  },
  {
    id: 78,
    productName: '2-(4-Octylphenethyl)-2-nitropropane-1,3- diol',
    casNumber: '374077-88-0',
  },
  {
    id: 79,
    productName: 'Fosfomycin phenyl ethylamine',
    casNumber: '25383-07-7',
  },
  {
    id: 80,
    productName: '[1-(2-amino-2-oxoethyl)cyclohexyl]acetic acid',
    casNumber: '99189-60-3',
  },
  {
    id: 81,
    productName: '2,4-dibromo-3-(difluoromethoxy)benzoic acid',
    casNumber: '223595-28-6',
  },
  {
    id: 82,
    productName: 'Ethyl-7-bromo-1-cyclopropyl-8-difluoromethoxy-1,4-dihydro-4-oxoquinoline-3-carboxylate',
    casNumber: '194805-07-7',
  },
  {
    id: 83,
    productName: '1-cyclopropyl-8-difluoromethoxy-7-(1-methyl-2-trityl-2,3-dihydro-1H-isoindol-5-yl)-4-oxo-1,4-dihydro-quinoline-3-carboxylic acid ethyl ester',
    casNumber: 'N/A',
  },
  {
    id: 84,
    productName: '(1R)-5-Bromo-1-methyl-2-trityl-2,3-dihydro-1H-isoindole',
    casNumber: '194805-14-6',
  },
  {
    id: 85,
    productName: '4-imino-N,N,6-trimethyl-1,4,5,6-tetrahydro-1,3,5-triazin-2- amine hydrochloride',
    casNumber: '352211-11-1',
  },
  {
    id: 86,
    productName: '(2R,3R)-2,3-dihydroxysuccinicacid-(6R)-4-imino-N,N,6-trimethyl-1,4,5,6-tetrahydro-1,3,5- triazin-2-amine',
    casNumber: '1016979-78-4',
  },
  {
    id: 87,
    productName: '5-Amino-2-mercapto benzimidazole',
    casNumber: '2818-66-8',
  },
  {
    id: 88,
    productName: '2-Mercapto5-(1- pyrrolyl)benzimidazole',
    casNumber: '172152-53-3',
  },
  {
    id: 89,
    productName: '2-Chloromethyl-4- methoxy -3-methyl pyridine hydrochloride',
    casNumber: '86604-74-2',
  },
  {
    id: 90,
    productName: '2-[[(4-Methoxy -3-methyl-2- pyridinyl)methyl]sulfanyl] 5-(1H-pyrrol-1-yl) 1Hbenzimidazole',
    casNumber: '172152-35-1 / 172152-36-2',
  },
  {
    id: 91,
    productName: 'Cis-(2-Bromomethyl)-2-(2,4-dichlorophenyl)-1,3-dioxolan-4- yl methyl benzoate',
    casNumber: '74852-61-2',
  },
  {
    id: 92,
    productName: 'Cis-2-(2,4-Dichlorophenyl)-2-(1H-1,2,4-triazol-1-yl-methyl)-1,3-dioxolan-4-yl methanol',
    casNumber: '67914-85-6',
  },
  {
    id: 93,
    productName: 'Cis-[2-(2,4-Dichlorophenyl)-2-(1H-1,2,4-triazol-1-yl-methyl)-1,3-dioxolan-4-yl]methyl methane sulfonate',
    casNumber: '67914-86-7',
  },
  {
    id: 94,
    productName: '1-(4-Methoxyphenyl)-4-(4-nitrophenyl)piperazine',
    casNumber: '74852-61-2',
  },
  {
    id: 95,
    productName: '2,4-Dihydro-4-[4-[4-(4-methoxyphenyl)-1-piperazinyl]phenyl]-3H-1,2,4-triazole-3- one',
    casNumber: '74853-07-9',
  },
  {
    id: 96,
    productName: '2,4-Dihydro-4-[4-[4-(4-methoxyphenyl)-1-piperazinyl]phenyl]-2-(1-methylpropyl)-3H-1,2,4- triazole-3-one',
    casNumber: '252964-68-4',
  },
  {
    id: 97,
    productName: '2,4-Dihydro-4-[4-[4-(4-hydroxyphenyl)-1-piperazinyl]phenyl]-2-(1-methylpropyl)-3H-1,2,4- triazole-3-one',
    casNumber: '106461-41-0',
  },
  {
    id: 98,
    productName: 'cis-2-(2,4-Dichlorophenyl)- 2-(1H-1,2,4-triazol-1-ylmethyl)-1,3-dioxolan-4-yl methyl methane Tosylate',
    casNumber: '113770-65-3',
  },
  {
    id: 99,
    productName: '7,8-dimethoxy-1,3-dihydro-2H-3-benzazepin-2-o',
    casNumber: '73942-87-7',
  },
  {
    id: 100,
    productName: '(7S)-3,4-Dimethoxy-N-methylbicyclo[4.2.0]octa-1,3,5-triene-7-methanamine hydrochloride',
    casNumber: '866783-13-3',
  },
  {
    id: 101,
    productName: '(Z)-3-(3-(N-(((S)-1,2-dihydro-4,5-dimethoxycyclobutabenzen-2-yl)methyl)-N-methylamino)propyl)-7,8-dimethoxy-1H- benzo[d]azepin-2(3H)-one',
    casNumber: 'N/A',
  },
  {
    id: 102,
    productName: '(R)-4-Chlorobenzhydryl amine',
    casNumber: '163837-57-8',
  },
  {
    id: 103,
    productName: 'N,N-bis(2-chloroethyl)-4-methylbenzenesulfonamide',
    casNumber: '42137-88-2',
  },
  {
    id: 104,
    productName: '(-)-Chlorobenzohydrol(4-p- toluene sulfonyl)piperazine',
    casNumber: '163837-56-7',
  },
  {
    id: 105,
    productName: '(R)-1-[(4-Chlorophenyl)phenylmethyl]piperazine',
    casNumber: '300543-56-0',
  },
  {
    id: 106,
    productName: '(-)[2-(4(4-Chlorophenyl)phenyl methyl]-1-piperazinyl]ethanol',
    casNumber: '705289-61-8',
  },
  {
    id: 107,
    productName: '(-)-1-[(4-Chlorophenyl (phenyl)methyl]piperazine',
    casNumber: '130018-88-1',
  },
  {
    id: 108,
    productName: '(1S,5R)-1-phenyl-3-oxabicyclo [3.1.0]hexan-2-one',
    casNumber: '96847-53-9',
  },
  {
    id: 109,
    productName: 'Ethyl2-oxocyclopentanecarboxylate',
    casNumber: '611-10-9',
  },
  {
    id: 110,
    productName: '2-(1-Chloroethyl)-5,5-dimethyl-2-(4-methylphenyl)-1,3-dioxane',
    casNumber: '1403382-44-4',
  },
  {
    id: 111,
    productName: '2-(4-Methylphenyl)propanoic acid',
    casNumber: '938-94-3',
  },
  {
    id: 112,
    productName: '2-(4-Bromomethyl)phenylpropionic acid',
    casNumber: '111128-12-2',
  },
  {
    id: 113,
    productName: 'Cis-5-Norbornene-exo-2,3-dicarboxylic anhydride',
    casNumber: '2746-19-2',
  },
  {
    id: 114,
    productName: 'Bicyclo[2,2,1]heptane-2,3-di-exo-carboximide',
    casNumber: '14805-29-9',
  },
  {
    id: 115,
    productName: 'Trans-Cyclohexane-1,2-dicarboxylic acid',
    casNumber: '2305-32-0',
  },
  {
    id: 116,
    productName: 'Trans-(1R,2R)-Cyclohexane-1,2-dicarboxylic acid',
    casNumber: '46022-05-3',
  },
  {
    id: 117,
    productName: 'Trans-(1R,2R)-Cyclohexane dimethanol',
    casNumber: '65376-05-8',
  },
  {
    id: 118,
    productName: 'Trans-(1R,2R)-Cyclohexane-1,2-diylbis(methylene)dimethanesulfonate',
    casNumber: '186204-35-3',
  },
  {
    id: 119,
    productName: "4'-(1,2-Benzisothiazol-3-yl)-(3aR,7aR)-octahydro-spiro[2H-isoindole-2,1'-piperizinium] methanesulfonate",
    casNumber: '186204-37-5',
  },
  {
    id: 120,
    productName: '1,2,3,6-tetra-O-pivaloyl-alpha-D-galactofuranoside',
    casNumber: '220017-49-2',
  },
  {
    id: 121,
    productName: 'Beta-D-Galactofuranose,5-Azido-5-deoxy-1,2,3,6-tetrakis(2,2-dimethylpropanoate',
    casNumber: '226877-06-1',
  },
  {
    id: 122,
    productName: '(2R)-Hydroxyphenylacetic acid',
    casNumber: '614-75-5',
  },
  {
    id: 123,
    productName: '2-(4-Nitrophenyl)ethanamine hydrochloride',
    casNumber: '29968-78-3',
  },
  {
    id: 124,
    productName: '(R)-2-Hydroxy-N-[2-(4-nitrophenyl)ethyl]-2-phenylacetamide',
    casNumber: '521284-19-5',
  },
  {
    id: 125,
    productName: '(R)-2-[[2-(4-Nitrophenyl)ethyl]amino]-1-phenylethanol mono hydrochloride',
    casNumber: '521284-21-9',
  },
  {
    id: 126,
    productName: '(R)-2-[[2-(4-Aminophenyl) ethyl)amino]-1-phenylethanol hydrochloride',
    casNumber: '521284-22-0',
  },
  {
    id: 127,
    productName: '(2-Amino-1,3-thiazol-4-yl) acetic acid',
    casNumber: '29676-71-9',
  },
  {
    id: 128,
    productName: '1-(2,4-dichlorophenyl) ethanone',
    casNumber: '2234-16-4',
  },
  {
    id: 129,
    productName: '2-bromo-1-(2,4-dichlorophenyl)ethanone',
    casNumber: '2631-72-3',
  },
  {
    id: 130,
    productName: '1-(2,4-dichlorophenyl)-2-(1H-imidazol-1-yl)ethanone',
    casNumber: '46503-52-0',
  },
  {
    id: 131,
    productName: '(1Z)-1-(2,4-dichlorophenyl)-2-(1H-imidazol-1-yl)ethanone oxime',
    casNumber: '64211-06-9',
  },
  {
    id: 132,
    productName: '2,4-Dichlorobenzyl chloride',
    casNumber: '94-99-5',
  },
  {
    id: 133,
    productName: 'Methyl7-chloro-1-cyclopropyl-8-methyl-4-oxo-1,4-dihydroquinoline-3-carboxylate',
    casNumber: 'N/A',
  },
  {
    id: 134,
    productName: '[6[2,2-dimethyl-1-oxopropyl)methylamino]-5-methyl-3-pyridinyl]boronic acid',
    casNumber: '446299-78-1',
  },
  {
    id: 135,
    productName: '2-Hydroxymethyl-3,4-dimethoxy pyridine',
    casNumber: "72830-08-1",
  },
  {
    id: 136,
    productName: '2-Chloromethyl-3,4-dimethoxy pyridine hydrochloride',
    casNumber: "72830-09-2",
  },
  {
    id: 137,
    productName: '5-(Difluoromethoxy)-2-[[(3,4-dimethoxy-2-pyridinyl)methyl] thio]-1H-benzimidazole',
    casNumber: '162625-64-9',
  },
  {
    id: 138,
    productName: '2-[(1S,2S)-1-Ethyl-2-benzyloxypropyl]-2,4-dihydro-4-[4-[4-(4-hydroxyphenyl)-1-piperozinyl]phenyl]-3H-1,2,4-triazol-3-one',
    casNumber: '184177-83-1',
  },
  {
    id: 139,
    productName: '((3S,5R)-5-((1H-1,2,4-triazol-1-yl)methyl)-5-(2,4-difluorophenyl)-tetrahydrofuran-3-yl)methyl 4-chlorobenzenesulfonate',
    casNumber: '175712-02-4',
  },
  {
    id: 140,
    productName: '4-(4-(4-(4-(((3R)-5-((1H-1,2,4-triazol-1-yl)methyl)-5-(2,4-difluorophenyl)-tetrahydrofuran-3-yl)methoxy)phenyl)piperazin-1-yl)phenyl)-2-((2S,3S)-2-(benzyloxy)pentan-3-yl)-2H-1,2,4-triazol-3(4H)-one',
    casNumber: '170985-86-1',
  },
  {
    id: 141,
    productName: '3-Methoxypropylamine',
    casNumber: '7332-73-0',
  },
  {
    id: 142,
    productName: '1-(3-Methoxypropyl)piperidin-4-one',
    casNumber: '16771-85-0',
  },
  {
    id: 143,
    productName: '1-(3-Methoxypropyl)piperidin-4-amine',
    casNumber: '232941-14-9',
  },
  {
    id: 144,
    productName: 'thyl4-acetamido-3-bromo-2-(2-bromo ethoxy)-5-chloro benzoate',
    casNumber: '748788-39-8',
  },
  {
    id: 145,
    productName: 'Methyl4-acetamido-5-chloro-2,3-dihydro-1-benzofuran-7-carboxylate',
    casNumber: '143878-29-9',
  },
  {
    id: 146,
    productName: '4-Amino-5-chloro-2,3-dihydro-1-benzofuran-7-carboxylic acid',
    casNumber: '123654-26-2',
  },
  {
    id: 147,
    productName: '2-Hydroxymethyl-4-(3-methoxypropoxy)-3-methyl pyridine hydrochloric acid',
    casNumber: '675198-19-3',
  },
  {
    id: 148,
    productName: '2-({[4-(3-Methoxypropoxy)-3-methylpyridin-2-yl]methyl} thio)-1H-benzimidazole',
    casNumber: '117977-21-6',
  },
  {
    id: 149,
    productName: '2-Chloromethyl-4-(3- methoxypropoxy)- 3-methylpyridine hydrochloride',
    casNumber: '153259-31-5',
  },
  {
    id: 150,
    productName: '2-[[(4-(3- Methoxypropoxy)- 3-methyl-2-pyridinyl)-2- methyl]sulfinyl] -1H-benzimidazole',
    casNumber: '117976-89-3',
  },
  {
    id: 151,
    productName: '2-[(2-Methoxyphenoxy)methyl]oxirane',
    casNumber: '2210-74-4',
  },
  {
    id: 152,
    productName: 'N-(2,6-Dimethylphenyl)-2-piperazin-1-ylacetamide',
    casNumber: '5294-61-1',
  },
  {
    id: 153,
    productName: '5-[(2R)-2-aminopropyl]-1-[3-(benzyloxy)propyl]-2,3-dihydro-7-carbonitrile-1H-indole(2R,3R)-2,3-dihydroxy butanedioate',
    casNumber: '239463-85-5',
  },
  {
    id: 154,
    productName: '2-[2-(2,2,2-Trifluoroethoxy)phenoxy]ethyl methanesulfonate',
    casNumber: '160969-03-9',
  },
  {
    id: 155,
    productName: '3-[7-Cyano-5[(2R)-2-({2-[2-(2,2,2-trifluoroethoxy)phenoxy]ethyl}amino)propyl]-2,3-dihydro-1H-indol-1-yl}propyl benzoate tartrate',
    casNumber: '885340-11-4',
  },
  {
    id: 156,
    productName: '1-(3-Hydroxypropyl)-5-(2-{2-[2-(2,2,2-trifluoroethoxy)phenoxy]ethylamino}propyl)-2,3-dihydro-1H-indole-7-carbonitrile',
    casNumber: '885340-13-6',
  },
  {
    id: 157,
    productName: '1-[3-(Benzoyloxy)propyl]-2,3-dihydro-5-(2-oxopropyl)-1H-Indole-7-carbonitrile',
    casNumber: '350797-57-8',
  },
  {
    id: 158,
    productName: '1-[3-(Benzoyloxy)propyl]-2,3-dihydro-5-(2-nitropropyl)-1h-indole-7-carbonitrile',
    casNumber: '350797-56-7',
  },
  {
    id: 159,
    productName: 'Benzyl{3-fluoro-4-[6-(2-methyl-2H-tetrazol-5-yl)pyridin-3-yl]phenyl}carbamate',
    casNumber: '1220910-89-3',
  },
  {
    id: 160,
    productName: '(R)-Glycidyl butyrate',
    casNumber: '60456-26-0',
  },
  {
    id: 161,
    productName: '1-(3-Methyl-1-phenyl-1H-pyrazol-5-yl)piperazine',
    casNumber: '401566-79-8',
  },
  {
    id: 162,
    productName: 'Tert-Butyl(2S)-4-oxo-2-(1,3-thiazolidin-3-ylcarbonyl)pyrrolidine-1-carboxylate',
    casNumber: '401564-36-1',
  },
  {
    id: 163,
    productName: '(2S,4S)-4-[4-(3-Methyl-1-phenyl-1H-pyrazol-5-yl)-1-piperazinyl]-2-(3-thiazolidinylcarbonyl)-1-pyrrolidinecarboxylic acid tert-butyl ester',
    casNumber: '401566-80-1',
  },
  {
    id: 164,
    productName: '(3R,4R)-1-Benzyl-n,4-dimethylpiperidin-3-amine ((2r,3r)-2,3-bis((4-methylbenzoyl)oxy)succinate)',
    casNumber: '477600-71-8',
  },
  {
    id: 165,
    productName: 'Isonicotinic acid N -Oxide',
    casNumber: '13602-12-5',
  },
  {
    id: 166,
    productName: 'Tert-butyl2-(1-oxidoisonicotinoyl)hydrazinecarboxylate',
    casNumber: '577778-86-0',
  },
  {
    id: 167,
    productName: 'Tert-butyl2-(2-cyanoisonicotinoyl)hydrazinecarboxylate',
    casNumber: 'N/A',
  },
  {
    id: 168,
    productName: '2-cyanoisonicotinohydrazide paratoluene sulfonate',
    casNumber: 'N/A',
  },
  {
    id: 169,
    productName: '4-(acetamidomethyl)benzoic acid',
    casNumber: '1205-58-9',
  },
  {
    id: 170,
    productName: '5-vinylpyrrolidin-2-one',
    casNumber: '7529-16-0',
  },
  {
    id: 171,
    productName: '3-Amino-1-Adamantanol',
    casNumber: '702-82-9',
  },
  {
    id: 172,
    productName: '(2S)-1-(Chloroacetyl)-2-pyrrolidine carbonitrile',
    casNumber: '207557-35-5',
  },
  {
    id: 173,
    productName: '5-(2-Fluorophenyl)-1H-pyrrole-3-carbaldehyde',
    casNumber: '881674-56-2',
  },
  {
    id: 174,
    productName: 'Pyridine-3-sulfonyl chloride',
    casNumber: '16133-25-8',
  },
  {
    id: 175,
    productName: '5-(2-Fluorophenyl)-1-(pyridin-3-ylsulfonyl)-1H-pyrrole-3- carbaldehyde',
    casNumber: '881677-11-8',
  },
]

intermediateDetailes(){
return of(this.Intermediates)
}
}
