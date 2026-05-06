<?php
$nums = [2,8,5,7];
$target = 9;


function twoSum($nums, $target) {   
        
    $index1 = 0;
    $index2 = 1;
    $numbersFound = false; 

    while(!$numbersFound){
        if ($nums[$index1] + $nums[$index2] === $target){
            return [$index1, $index2];
        }
        if($index2 === (count($nums) - 1)){
            $index1 +=1;
            $index2 = $index1 +1; 
        } else {
            $index2 +=1;
        }
    }
}

print_r(twoSum($nums, $target));