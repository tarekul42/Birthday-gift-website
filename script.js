// console.log('hiiiiiiiiiiiiiii');
document.getElementById('Password-btn').addEventListener('click',function(){
//    console.log('hiiiiiiiiiiiiiiiiii');

const getInputField = document.getElementById('Password');
const getFieldValue = getInputField.value ;
getInputField.value = '';
// console.log(getFieldValue);

const getIdField = document.getElementById('next-btn');

if(getFieldValue === "BestFriendsForever"){
    
    getIdField.style.visibility = 'visible';

}
else{
    alert ("This is not a valid password . If you don't know please ask me ")
}
 
})