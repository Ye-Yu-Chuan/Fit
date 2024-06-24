const cal_btn = document.querySelector('#fit-calculation');

cal_btn.addEventListener('click', selected);

function selected(){
    const weight = document.getElementById("weight").value;
    const bmr = document.getElementById("bmr").value;
    const floatingSelect = document.getElementById("floatingSelect").value;

    let daily_TDEE = bmr *1.2;
    let daily_Protein = weight *1.2;
    let daily_Protein_unit = Math.ceil( (daily_Protein -17*2) /8 );

    let daily_Total_Cal = 0;
    let daily_lunch_Cal = 0;
    if (floatingSelect == "增肌") { daily_Total_Cal = daily_TDEE +500; }
    else if (floatingSelect == "減脂") { daily_Total_Cal = daily_TDEE -500; }
    daily_lunch_Cal = Math.trunc( daily_Total_Cal -200*2 -daily_Protein_unit*40 );

    alert("中餐攝取熱量上限" + daily_lunch_Cal + "卡\n每日蛋白素至少" + daily_Protein_unit + "匙");
}
