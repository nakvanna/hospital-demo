const docx = require('docx-templates')
const libre = require('libreoffice-convert')
const path = require('path')
const extend = '.pdf'
const fs = require('fs');
//convert file
const enterPath = path.join(__dirname, '../public/files/report.docx');
const outputPath = path.join(__dirname, '../public/files/report.pdf');
// end convert file
const {exec} = require('child_process')
const Labo = require('../models/labo')
const Echo = require('../models/echo')
const Address = require('../models/address-book')
const Labo_detail = require('../models/labo-detail')
const EchoBaby = require('../models/echo-baby')
const express = require('express');
const router = express.Router();

function date_ConvertedToAge(raw_Date){
  const d = new Date(raw_Date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return calculate_age(new Date(`${ye}, ${mo}, ${da}`));
}
function dateFormatConverted(raw_Date){
  const d = new Date(raw_Date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return (`ថ្ងៃទី:${da}, ខែ:${mo}, ឆ្នាំ:${ye}`);
}
function calculate_age(dob) {
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
router.post('/print-echo-baby/:id', async function (req, res, next) {
let id = req.params.id;
try {
  let echo_baby = await EchoBaby.findById(id).populate('patient');
  let address = await Address.findById(echo_baby.patient.current_address_book);
  let data_baby = {
    full_name: echo_baby.patient.lname + ' ' + echo_baby.patient.fname,
    gender: echo_baby.patient.gender,
    age: date_ConvertedToAge(echo_baby.patient.dob),
    address: address.province+ ' ' +address.district+ ' ' +address.commune+ ' ' +address.village,
    bby_num: echo_baby.bby_num,
    place_placenta: echo_baby.place_placenta,
    bby_status: echo_baby.bby_status,
    status_waterfall: echo_baby.status_waterfall,
    bby_healthy: echo_baby.bby_healthy,
    bby_heartrate: echo_baby.bby_heartrate,
    bby_activity: echo_baby.bby_activity,
    bby_skull: echo_baby.bby_skull,
    bby_thigh_bone: echo_baby.bby_thigh_bone,
    bby_weight: echo_baby.bby_weight,
    bby_age: echo_baby.bby_age,
    bby_birth: echo_baby.bby_birth,
    check_date: echo_baby.check_date,
    bby_gender: echo_baby.bby_gender,
  };
  const template = fs.readFileSync('./Echo_baby_Template.docx');
  const buffer = await docx.createReport({
    template,
    data: data_baby,
    additionalJsContext: {
      injectSvgUp: () => {
        const svg_data = Buffer.from(`<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <rect x="10" y="10" height="100" width="100" style="stroke:#ff0000; fill: #0000ff"/>
                                </svg>`, 'utf-8');

        // Providing a thumbnail is technically optional, as newer versions of Word will just ignore it.
        const thumbnail = {
          data: fs.readFileSync('./public/' + echo_baby.photo_up),
          extension: '.png',
        };
        return {width: 10.85669, height: 7.625197, data: svg_data, extension: '.svg', thumbnail};
      },
      injectSvgDown: () => {
        const svg_data = Buffer.from(`<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <rect x="10" y="10" height="100" width="100" style="stroke:#ff0000; fill: #0000ff"/>
                                </svg>`, 'utf-8');

        // Providing a thumbnail is technically optional, as newer versions of Word will just ignore it.
        const thumbnail = {
          data: fs.readFileSync('./public/' + echo_baby.photo_down),
          extension: '.png',
        };
        return {width: 9.269291, height: 6.973228, data: svg_data, extension: '.svg', thumbnail};
      }
    }
  });
  await fs.writeFileSync('./public/files/report.docx', buffer);
  // Read file
  const file = await fs.readFileSync(enterPath);
  libre.convert(file, extend, undefined, async (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    } else {
      console.log('converted')
    }
    await fs.writeFileSync(outputPath, done);
  });
  res.json({
    status: true,
    label: {
      pdf: `${Date.now()}-${echo_baby.patient.llatin}-${echo_baby.patient.flatin}.pdf`,
      docx: `${Date.now()}-${echo_baby.patient.llatin}-${echo_baby.patient.flatin}}.docx`,
    },
    data: {
      // pdf: 'http://localhost:3000/files/report.pdf',
      // docx: 'http://localhost:3000/files/report.docx',
      pdf: 'https://api.hospital.demo.cloudware.com.kh/files/report.pdf',
      docx: 'https://api.hospital.demo.cloudware.com.kh/files/report.docx',
    },
    message: 'Successfully Generated report!'
  });
} catch (e) {
  res.json({
    status: false,
    message: e.message
  })
  console.log(e)
  return false
}
});

router.post('/print-labo/:id', async function (req, res, next) {
  let id = req.params.id;
  try {
    let labos = await Labo.findById(id).populate('patient');
    let address = await Address.findById(labos.patient.current_address_book);
    let labo_details = await Labo_detail.find({labo: labos._id})
    console.log(labos.createdAt);
    let data = {
      full_name: labos.patient.lname + ' ' + labos.patient.fname,
      gender: labos.patient.gender,
      age: date_ConvertedToAge(labos.patient.dob),
      address: address.province+ ' ' +address.district+ ' ' +address.commune+ ' ' +address.village,
      createdAt: dateFormatConverted(labos.createdAt),
      HAEMATHOLOGY: labo_details.filter((d) => {
        return d.type === 'HAEMATHOLOGY'
      }),
      BIOCHEMISTRY: labo_details.filter((d) => {
        return d.type === 'BIOCHEMISTRY'
      }),
      SEROLOGY: labo_details.filter((d) => {
        return d.type === 'SEROLOGY'
      }),
      blood_pressure: labos.blood_pressure,
      heat: labos.heat,
      pulse: labos.pulse,
      spo: labos.spo
    };
    const template = fs.readFileSync('./NewBlood_Template.docx');
    const buffer = await docx.createReport({
      template,
      data: data,
      additionalJsContext: {
        injectSvg: () => {
          const svg_data = Buffer.from(`<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <rect x="10" y="10" height="100" width="100" style="stroke:#ff0000; fill: #0000ff"/>
                                </svg>`, 'utf-8');

          // Providing a thumbnail is technically optional, as newer versions of Word will just ignore it.
          const thumbnail = {
            data: fs.readFileSync('./public/' + labos.patient.photo),
            extension: '.png',
          };
          return {width: 2.6458333333, height: 3.96875, data: svg_data, extension: '.svg', thumbnail};
        }
      }
    });
    await fs.writeFileSync('./public/files/report.docx', buffer);
    // Read file
    const file = await fs.readFileSync(enterPath);
    libre.convert(file, extend, undefined, async (err, done) => {
      if (err) {
        console.log(`Error converting file: ${err}`);
      } else {
        console.log('converted')
      }
      await fs.writeFileSync(outputPath, done);
    });
    res.json({
      status: true,
      label: {
        pdf: `${Date.now()}-${labos.patient.llatin}-${labos.patient.flatin}.pdf`,
        docx: `${Date.now()}-${labos.patient.llatin}-${labos.patient.flatin}}.docx`,
      },
      data: {
        // pdf: 'http://localhost:3000/files/report.pdf',
        // docx: 'http://localhost:3000/files/report.docx',
        pdf: 'https://api.hospital.demo.cloudware.com.kh/files/report.pdf',
        docx: 'https://api.hospital.demo.cloudware.com.kh/files/report.docx',
      },
      message: 'Successfully Generated report!'
    });
  } catch (e) {
    res.json({
      status: false,
      message: e.message
    })
    console.log(e)
    return false
  }
});

module.exports = router;
