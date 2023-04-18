const featuresDropdownBtn = document.querySelector(".features-dropdown-btn");
const featuresDropdownItems = document.querySelector(
  ".features-dropdown-items"
);
const featuresDropdownArrow = document.querySelector(
  ".features-dropdown-arrow"
);
const companyDropdownBtn = document.querySelector(".company-dropdown-btn");
const companyDropdownItems = document.querySelector(".company-dropdown-items");
const companyDropdownArrow = document.querySelector(".company-dropdown-arrow");

const navigation = document.querySelector(".nav-links");
const hamburgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

featuresDropdownBtn.addEventListener("click", function () {
  if (featuresDropdownItems.style.display === "block") {
    featuresDropdownItems.style.display = "none";
    featuresDropdownArrow.style.transform = "scaleY(1)";
  } else {
    featuresDropdownItems.style.display = "block";
    featuresDropdownArrow.style.transform = "scaleY(-1)";
  }
});

companyDropdownBtn.addEventListener("click", function () {
  if (companyDropdownItems.style.display === "block") {
    companyDropdownItems.style.display = "none";
    companyDropdownArrow.style.transform = "scaleY(1)";
  } else {
    companyDropdownItems.style.display = "block";
    companyDropdownArrow.style.transform = "scaleY(-1)";
  }
});

hamburgerBtn.addEventListener("click", function () {
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
    overlay.style.display = "none";
  } else {
    navigation.style.display = "block";
    overlay.style.display = "block";
  }
});
