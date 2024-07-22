Array Questions

1- Remove duplicate from array-
let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]

for(let i = 0; i<arr.length; i++){
 	for(let j=i+1; j<arr.length; j++){
     	if(arr[i]==arr[j]){
         	arr.splice(j,1)
         	j--;
     	}
 	}
}
console.log(arr)

2- Reverse an array

let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]

let len = arr.length-1

for(let i = 0; i<arr.length/2; i++){
	let temp = arr[i];
	arr[i]=arr[len-i];
	arr[len-i]=temp
}
console.log(arr)

3- Sort an array

let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]

for(let i = 0; i<arr.length; i++){
	for(let j = i+1; j<arr.length; j++){
    	if(arr[i]>arr[j]){
        	let temp = arr[i];
        	arr[i]=arr[j];
        	arr[j] = temp
    	}
	}
}
console.log(arr)


4- Remove complete duplicate element- 
let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]

for(let i = 0; i<arr.length; i++){
	for(let j = i+1; j<arr.length; j++){
    	if(arr[i]>arr[j]){
        	let temp = arr[i];
        	arr[i]=arr[j];
        	arr[j] = temp
    	}
	}
}
console.log(arr)

5- Remove duplicate elements - 

let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]

for(let i = 0; i<arr.length; i++){
 	for(let j=i+1; j<arr.length; j++){
     	if(arr[i]==arr[j]){
         	arr.splice(j,1)
         	j--;
     	}
 	}
}
console.log(arr)

6- Remove specific element-

let arr = [1,2,3,42,23,4,5,3,4,5,6,4,2]
let num = 3
for(let i = 0; i<arr.length; i++){
 	if(arr[i] === num){
     	arr.splice(i,1)
 	}
}
console.log(arr)






7- Create obj from 2 arrays
// WAP to create an object from two arrays.

let arr1 = [1,2,3,4,5,6,7]
let arr2 = ["Abhishek","Manish","Roshan","Akash S","Akash M","Abhinav","Chandan Tiwari"]

let obj={}

for(let i =0; i<arr1.length;i++){
	obj[arr1[i]]=arr2[i]
}

console.log(obj)


8- Find a peak element which is not smaller than its neighbours

let arr = [10, 20, 15, 2, 23, 90, 67,71,35];

let newArr = [];
for(let i =0; i<arr.length; i++){
	if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
    	// console.log(arr[i])
    	newArr.push(arr[i])
	}
}

console.log(newArr)


9-Program to find the minimum (or maximum) element of an array
// WAP to create an object from two arrays.

let arr = [ 20, 15,121, 23, 90, 67,71,35];

let max=0;
let min=arr[0];
for(let i =0; i<arr.length; i++){
  if(max<arr[i]){
  	max=arr[i]
  }
  if(min>arr[i]){
  	min=arr[i]
  }
}

console.log(max,min)


9-Union and Intersection of two sorted arrays


arr = [1, 3, 4, 5, 7]
arr2= [2, 3, 5, 6];
let newArr =[]
newArr=[...arr,...arr2]
let intArr=[]
for(let i=0; i<arr.length;i++){
	for(let j = 0; j<arr2.length; j++){
    	if(arr[i]===arr2[j]){
        	intArr.push(arr2[i])
    	}
	}
}

for(let i = 0; i<newArr.length; i++){
 	for(let j=i+1; j<newArr.length; j++){
     	if(newArr[i]==newArr[j]){
         	newArr.splice(j,1)
         	j--;
     	}
 	}
}
console.log("interseciton====",intArr)
console.log("union =====",newArr)


10- Find Subarray with given Sum from Array of non-negative Numbers
// Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23}, sum = 23
// Output: 2 5
// Explanation: Sum of elements between indices 2 and 5 is 2 + 4 + 8 + 9 = 23


let arr= [1, 4, 0, 0, 3, 10, 5];

let sum = 7;
let index1=-1;
let index2=-1;
for(let i=0; i<arr.length; i++){
    let currentSum=0
    for(let j = i; j<arr.length;j++){
        currentSum += arr[j]
        if(currentSum===sum){
            index1=i;
            index2=j;
            break;
        }
    }
    if(index1 !==-1 || index2 !==-1){
        break;
    }
    
}
console.log([index1+1,index2+1])

11- Write a program to cyclically rotate an array by one

let arr= [1, 2, 3, 4, 5];
let lastElem = arr.length-1
let elem = arr[lastElem]
arr.splice(lastElem,1)
arr.unshift(elem)
console.log(arr)




