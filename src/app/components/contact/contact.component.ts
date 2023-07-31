import { Component, OnInit } from '@angular/core';
// import { useForm, ValidationError } from '@formspree/react';
import { NgForm, NgModelGroup } from "@angular/forms";
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  divison = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  submit(form:any){
    var name = form.name;
    console.log(name);

    var email = form.email;
    console.log(email);

    var number = form.number;
    console.log(number);

    var subject = form.subject;
    console.log(subject);

    var message = form.message;
    console.log(message);
}
onSubmit(form: NgForm, account: NgModelGroup) {
  console.log(form, account);
}

disableSelect = new FormControl(false);


languages = [
  {id: 1, name: "Afghanistan"},
  {id: 2, name: "Åland Islands"},
  {id: 3, name: "Albania"},
  {id: 4, name: "Algeria"},
  {id: 5, name: "American Samoa"},
  {id: 6, name: "Andorra"},
  {id: 7, name: "Angola"},
  {id: 8, name: "Anguilla"},
  {id: 9, name: "Antarctica"},
  {id: 10, name: "Antigua and Barbuda"},
  {id: 11, name: "Argentina"},
  {id: 12, name: "Armenia"},
  {id: 13, name: "Aruba"},
  {id: 14, name: "Australia"},
  {id: 15, name: "Austria"},
  {id: 16, name: "Azerbaijan"},
  {id: 17, name: "Bahamas"},
  {id: 18, name: "Bahrain"},
  {id: 19, name: "Bangladesh"},
  {id: 20, name: "Barbados"},
  {id: 21, name: "Belarus"},
  {id: 22, name: "Belgium"},
  {id: 23, name: "Belize"},
  {id: 24, name: "Benin"},
  {id: 25, name: "Bermuda"},
  {id: 26, name: "Bhutan"},
  {id: 27, name: "Bolivia (Plurinational State of)"},
  {id: 28, name: "Bosnia and Herzegovina"},
  {id: 29, name: "Botswana"},
  {id: 30, name: "Bouvet Island"},
  {id: 31, name: "Brazil"},
  {id: 32, name: "British Indian Ocean Territory"},
  {id: 33, name: "Brunei Darussalam"},
  {id: 34, name: "Bulgaria"},
  {id: 35, name: "Burkina Faso"},
  {id: 36, name: "Burundi"},
  {id: 37, name: "Cabo Verde"},
  {id: 38, name: "Cambodia"},
  {id: 39, name: "Cameroon"},
  {id: 40, name: "Canada"},
  {id: 41, name: "Cayman Islands"},
  {id: 42, name: "Central African Republic"},
  {id: 43, name: "Chad"},
  {id: 44, name: "Chile"},
  {id: 45, name: "China"},
  {id: 46, name: "Christmas Island"},
  {id: 47, name: "Cocos (Keeling) Islands"},
  {id: 48, name: "Colombia"},
  {id: 49, name: "Comoros"},
  {id: 50, name: "Congo"},
  {id: 51, name: "Congo (Democratic Republic of the)"},
  {id: 52, name: "Cook Islands"},
  {id: 53, name: "Costa Rica"},
  {id: 54, name: "Côte d'Ivoire"},
  {id: 55, name: "Croatia"},
  {id: 56, name: "Cuba"},
  {id: 57, name: "Curaçao"},
  {id: 58, name: "Cyprus"},
  {id: 59, name: "Czech Republi"},
  {id: 60, name: "Denmark"},
  {id: 61, name: "Djibouti"},
  {id: 62, name: "Dominica"},
  {id: 63, name: "Dominican Republic"},
  {id: 64, name: "Ecuador"},
  {id: 65, name: "Egypt"},
  {id: 66, name: "El Salvador"},
  {id: 67, name: "Equatorial Guinea"},
  {id: 68, name: "Eritrea"},
  {id: 69, name: "Estonia"},
  {id: 70, name: "Ethiopia"},
  {id: 71, name: "Falkland Islands (Malvinas)"},
  {id: 72, name: "Faroe Islands"},
  {id: 73, name: "Fiji"},
  {id: 74, name: "Finland"},
  {id: 75, name: "France"},
  {id: 76, name: "French Guiana"},
  {id: 77, name: "French Polynesia"},
  {id: 78, name: "French Southern Territories"},
  {id: 79, name: "Gabon"},
  {id: 80, name: "Gambia"},
  {id: 81, name: "Georgia"},
  {id: 82, name: "Germany"},
  {id: 83, name: "Ghana"},
  {id: 84, name: "Gibraltar"},
  {id: 85, name: "Greece"},
  {id: 86, name: "Greenland"},
  {id: 87, name: "Grenada"},
  {id: 88, name: "Guadeloupe"},
  {id: 89, name: "Guam"},
  {id: 90, name: "Guatemala"},
  {id: 91, name: "Guernsey"},
  {id: 92, name: "Guinea"},
  {id: 93, name: "Guinea-Bissau"},
  {id: 94, name: "Guyana"},
  {id: 95, name: "Haiti"},
  {id: 96, name: "Heard Island and McDonald Islands"},
  {id: 97, name: "Honduras"},
  {id: 98, name: "Hong Kong"},
  {id: 99, name: "Hungary"},
  {id: 100, name: "Iceland"},
  {id: 101, name: "India"},
  {id: 102, name: "Indonesia"},
  {id: 103, name: "Iran (Islamic Republic of)"},
  {id: 104, name: "Iraq"},
  {id: 105, name: "Ireland (Republic of)"},
  {id: 106, name: "Isle of Man"},
  {id: 107, name: "Israel"},
  {id: 108, name: "Italy"},
  {id: 109, name: "Jamaica"},
  {id: 110, name: "Japan"},
  {id: 111, name: "Jersey"},
  {id: 112, name: "Jordan"},
  {id: 113, name: "Kazakhstan"},
  {id: 114, name: "Kenya"},
  {id: 115, name: "Kiribati"},
  {id: 116, name: "Korea (Democratic People's Republic of)"},
  {id: 117, name: "Korea (Republic of)"},
  {id: 118, name: "Kuwait"},
  {id: 119, name: "Kyrgyzstan"},
  {id: 120, name: "Lao People's Democratic Republic"},
  {id: 121, name: "Latvia"},
  {id: 122, name: "Lebanon"},
  {id: 123, name: "Lesotho"},
  {id: 124, name: "Liberia"},
  {id: 124, name: "Libya"},
  {id: 125, name: "Liechtenstein"},
  {id: 126, name: "Lithuania"},
  {id: 127, name: "Luxembourg"},
  {id: 128, name: "Macao"},
  {id: 129, name: "Macedonia (Republic of)"},
  {id: 130, name: "Madagascar"},
  {id: 131, name: "Malawi"},
  {id: 132, name: "Malaysia"},
  {id: 133, name: "Maldives"},
  {id: 134, name: "Mali"},
  {id: 135, name: "Malta"},
  {id: 136, name: "Marshall Islands"},
  {id: 137, name: "Martinique"},
  {id: 138, name: "Mauritania"},
  {id: 139, name: "Mauritius"},
  {id: 140, name: "Mayotte"},
  {id: 141, name: "Mexico"},
  {id: 142, name: "Micronesia (Federated States of)"},
  {id: 143, name: "Moldova (Republic of)"},
  {id: 144, name: "Monaco"},
  {id: 145, name: "Mongolia"},
  {id: 146, name: "Montenegro"},
  {id: 147, name: "Montserrat"},
  {id: 148, name: "Morocco"},
  {id: 149, name: "Mozambique"},
  {id: 150, name: "Myanmar"},
  {id: 151, name: "Namibia"},
  {id: 152, name: "Nauru"},
  {id: 153, name: "Nepal"},
  {id: 154, name: "Netherlands"},
  {id: 155, name: "New Caledonia"},
  {id: 156, name: "New Zealand"},
  {id: 157, name: "Nicaragua"},
  {id: 158, name: "Niger"},
  {id: 159, name: "Nigeria"},
  {id: 160, name: "Niue"},
  {id: 161, name: "Norfolk Island"},
  {id: 162, name: "Northern Mariana Islands"},
  {id: 163, name: "Norway"},
  {id: 164, name: "Oman"},
  {id: 165, name: "Pakistan"},
  {id: 166, name: "Palau"},
  {id: 167, name: "Palestine (State of)"},
  {id: 168, name: "Panama"},
  {id: 169, name: "Papua New Guinea"},
  {id: 170, name: "Paraguay"},
  {id: 171, name: "Peru"},
  {id: 172, name: "Philippines"},
  {id: 173, name: "Pitcairn"},
  {id: 174, name: "Poland"},
  {id: 175, name: "Portugal"},
  {id: 176, name: "Puerto Rico"},
  {id: 177, name: "Qatar"},
  {id: 178, name: "Réunion"},
  {id: 179, name: "Romania"},
  {id: 180, name: "Russian Federation"},
  {id: 181, name: "Rwanda"},
  {id: 182, name: "Saint Barthélemy"},
  {id: 183, name: "Saint Helena, Ascension and Tristan da Cunha"},
  {id: 184, name: "Saint Kitts and Nevis"},
  {id: 185, name: "Saint Lucia"},
  {id: 186, name: "Saint Martin (French part)"},
  {id: 187, name: "Saint Pierre and Miquelon"},
  {id: 189, name: "Saint Vincent and the Grenadines"},
  {id: 190, name: "Samoa"},
  {id: 191, name: "San Marino"},
  {id: 192, name: "Sao Tome and Principe"},
  {id: 193, name: "Saudi Arabia"},
  {id: 194, name: "Senegal"},
  {id: 195, name: "Serbia"},
  {id: 196, name: "Seychelles"},
  {id: 197, name: "Sierra Leone"},
  {id: 198, name: "Singapore"},
  {id: 199, name: "Sint Maarten (Dutch part)"},
  {id: 200, name: "Slovakia"},
  {id: 201, name: "Slovenia"},
  {id: 202, name: "Solomon Islands"},
  {id: 203, name: "Somalia"},
  {id: 204, name: "South Africa"},
  {id: 205, name: "South Georgia and the South Sandwich Islands"},
  {id: 206, name: "South Sudan"},
  {id: 207, name: "Spain"},
  {id: 208, name: "Sri Lanka"},
  {id: 209, name: "Sudan"},
  {id: 210, name: "Suriname"},
  {id: 211, name: "Svalbard and Jan Mayen"},
  {id: 212, name: "Swaziland"},
  {id: 213, name: "Sweden"},
  {id: 214, name: "Switzerland"},
  {id: 215, name: "Syrian Arab Republic"},
  {id: 216, name: "Taiwan, Province of China"},
  {id: 217, name: "Tajikistan"},
  {id: 218, name: " Tanzania (United Republic of)"},
  {id: 219, name: "Thailand"},
  {id: 220, name: "Timor-Leste"},
  {id: 221, name: "Togo"},
  {id: 222, name: "Tokelau"},
  {id: 223, name: "Tonga"},
  {id: 224, name: "Trinidad and Tobago"},
  {id: 225, name: "Tunisia"},
  {id: 226, name: "Turkey"},
  {id: 227, name: "Turkmenistan"},
  {id: 228, name: "Turks and Caicos Islands"},
  {id: 229, name: "Tuvalu"},
  {id: 230, name: "Uganda"},
  {id: 231, name: "Ukraine"},
  {id: 232, name: "United Arab Emirates"},
  {id: 233, name: "United Kingdom of Great Britain and Northern Ireland"},
  {id: 234, name: "United States of America"},
  {id: 235, name: "Outlying Islands"},
  {id: 236, name: "Uruguay"},
  {id: 237, name: "Uzbekistan"},
  {id: 238, name: "Vanuatu"},
  {id: 239, name: "Vatican City State"},
  {id: 240, name: "Venezuela (Bolivarian Republic of)"},
  {id: 241, name: "Viet Nam"},
  {id: 242, name: "Virgin Islands (British)"},
  {id: 243, name: "Virgin Islands (U.S.)"},
  {id: 244, name: "Wallis and Futuna"},
  {id: 245, name: "Western Sahara"},
  {id: 246, name: "Yemen"},
  {id: 247, name: "Zambia"},
  {id: 248, name: "Zimbabwe"},
]



  Units = [
    {
      titel:'MANUFACTURING FACILITY (UNIT I – API)',
      companyName:'Metrochem API Private Limited',
      address:'Plot No.62/C/6. Pipe Line Road, Phase 1, IDA, Jeedimetla, Hyderabad, Rangareddy, Telangana State 500055',
      city:''

    },
    {
      titel:'MANUFACTURING FACILITY (UNIT II – PELLETS)',
      companyName:'Metrochem API Private Limited',
      address:'Plot No D.69/A Part & D-69, Phase-1,  Quthubullapur Mandal, IDA Jeedimetla  Hyderabad, Rangareddy, Telangana State 500055',
      city:''
    },
    {
      titel:'MANUFACTURING FACILITY ( UNIT III – INTERMEDIATES)',
      companyName:'Metrochem API Private Limited',
      address:'Plot No l6 SY.NO. 42/U1 and 42/U2, Alinagar, Jinnaram Mandal, Chetlapottiaram, Sangareddy District, Medak, Telangana State 502319',
      // city:'Hyderabad, Rangareddy, Telangana State 500055'

    },
    {
      titel:'MANUFACTURING FACILITY (UNIT IV – API & INTERMEDIATES)',
      companyName:'Metrochem API Private Limited',
      address:'Plot No 34B,40B, 60B,J.N. Pharma City, Parawada,  Visakhapatnam, Andhra Pradesh 531021',
      // city:'Hyderabad, Rangareddy, Telangana State 500055'

    },
    {
      titel:'MANUFACTURING FACILITY ( UNIT B –INTERMEDIATES)',
      companyName:'Metrochem API Private Limited',
      address:'Sy No.530 and 534. Temple Road,  Gummadidala Mandal, Bonthapally,   Sangareddy District, Medak, Telangana State 502313',
      // city:'Hyderabad, Rangareddy, Telangana State 500055'

    },
    {
      titel:'MANUFACTURING FACILITY ( UNIT C–INTERMEDIATES)',
      companyName:'Metrochem API Private Limited',
      address:'Plot No. 3 and 4. SY.No.42, Alinagar,  Sangareddy District, Medak, Telangana State 5023I9',
      // city:'Hyderabad, Rangareddy, Telangana State 500055'

    },
    {
      titel:'R & D CENTER',
      companyName:'Metrochem API Private Limited',
      address:'Plot No 298/P, D No. 1-73/3/1 Pipe Line Road,  Phase 1, IDA, Jeedimetla,  Hyderabad, Rangareddy, Telangana State 500055',
      // city:'Hyderabad, Rangareddy, Telangana State 500055'

    }
  ]



}
