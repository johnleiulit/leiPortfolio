const imgLabels = {
  pc0: ['Step 1: Select Product','Step 2: Select Size','Step 3: Select Sugar level','Step 4: Payment','Step 5: Receipt'],
  pc1: ['Step 1: Select Product','Step 2: Select Model','Step 3: Enter Quantity','Step 4: Input X to check the cart','Step 5: The Cart','Step 6: Input V for the checkout','Step 7: Billing Station'],
  pc2: ['Salary Management System'],
  pc3: ['Log in Form','Registration Form','Database for Accounts','Simple CRUD','Database for Order Information'],
  pc4: ['Adding new product','Display to main page','Updating product','Successfully Updated','Inserted to Database','Successfully Deleted'],
  pc5: ['Login Form','Admin Dashboard','Employee Table','Employee 1 Dashboard','Employee 2 Dashboard'],
  pc6: ['Laptop View','Mobile View'],
  pc7: ['Login Form','User 1 Dashboard','User 2 Dashboard','Delete Permanently Modal','Recovery Modal','Progress Overtime'],
  pc8: ['Login Form','Admin Statistic','Create Employee Account','List of Employees','View and Edit Per Employee','Employee 1 Details','Employee 2 Details'],
  pc9: ['Login Form','Registration for BED and HED','Admin Statistics','List of Counselors','List of Students','Counselor Statistics','List of Students Assigned by Admin','Assign Regular Counseling','Appointment Schedule','Student Dashboard','Request Appointment','History of Appointments'],

  // QA Automation Extent Report screenshots
  qpc0: ['Test Overview','Passed Test Details'],
  qpc1: ['Extent Report Dashboard','Passed Test Details'],
};

const imgIdx = {};
Object.keys(imgLabels).forEach(k => imgIdx[k] = 0);

function slideImg(id, dir) {
  const box = document.getElementById(id);
  const imgs = box.querySelectorAll('.proj-img');
  const dots = document.getElementById(id + '-dots').querySelectorAll('.pdot');
  const lbl = document.getElementById(id + '-lbl');
  imgs[imgIdx[id]].classList.remove('show');
  dots[imgIdx[id]].classList.remove('on');
  imgIdx[id] = (imgIdx[id] + dir + imgs.length) % imgs.length;
  imgs[imgIdx[id]].classList.add('show');
  dots[imgIdx[id]].classList.add('on');
  if (imgLabels[id]) lbl.textContent = imgLabels[id][imgIdx[id]];
}

let currentProj = 0;
const totalProj = 10;

function changeProject(dir) {
  document.getElementById('proj-' + currentProj).classList.remove('active');
  currentProj = Math.max(0, Math.min(currentProj + dir, totalProj - 1));
  document.getElementById('proj-' + currentProj).classList.add('active');
  document.getElementById('projCounter').textContent = (currentProj + 1) + ' / ' + totalProj;
  document.getElementById('prevProj').disabled = currentProj === 0;
  document.getElementById('nextProj').disabled = currentProj === totalProj - 1;
} 
let currentQA = 0;
const totalQA = 2; 

function changeQAProject(dir) {
  document.getElementById('qa-proj-' + currentQA).classList.remove('active');
  currentQA = Math.max(0, Math.min(currentQA + dir, totalQA - 1));
  document.getElementById('qa-proj-' + currentQA).classList.add('active');
  document.getElementById('qaCounter').textContent = (currentQA + 1) + ' / ' + totalQA;
  document.getElementById('prevQA').disabled = currentQA === 0;
  document.getElementById('nextQA').disabled = currentQA === totalQA - 1;
}
