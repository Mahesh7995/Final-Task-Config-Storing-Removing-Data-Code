result = "";
mainStringData = string[];
if( extraBool){ 
  mainStringData = split( arrayData, "$$");
  removeBooleanArr = selectItem;
  sizeOfBooleanArray = sizeofarray( removeBooleanArr );
  rangeOfBoolArr = range(sizeOfBooleanArray );
  removingIndexes = integer[];

  // Loop through boolean array and find indexes of selected items
  for eachIndex in rangeOfBoolArr {
    if( removeBooleanArr[eachIndex] ){
      append(removingIndexes, eachIndex);
    }
  }

  // Loop through removingIndexes array and remove selected items from mainStringData
  for indexVal in removingIndexes{
    remove(mainStringData , indexVal);
  }

  result = join( mainStringData, "$$");

// Adding item info to stored data

  // Split existing data into array
  }elif ( arrayData <> "" ){
    mainStringData = split( arrayData, "$$");
  }
   ret = "";
  
  booleanArr  = selectOption;
  sizeOfBoolArr = sizeofarray( booleanArr );
  rangeOfBoolArr = range(sizeOfBoolArr);

  // Loop through boolean array and find index of selected option
  for index in rangeOfBoolArr {
    if( booleanArr[index] == true){
        ret = string(index);
    }
  }

  sizeOfMainArr = sizeofarray( mainStringData ) ;
  rangeOfMainArr = range( sizeOfMainArr ) ;

  keyString = boxType + "**" + boxSize + "**" + weightInGram;
  keySize = len( keyString);
  print keyString;

  // Checking if there are any duplicates in the string
  for eachIndex in rangeOfMainArr{

    // Extract the first keySize characters of the current item string
    subStringKey = substring( mainStringData[eachIndex], 0, keySize );
   
    // If the key string matches, remove the item from mainStringData
    if ( subStringKey == keyString ){		
      remove( mainStringData, eachIndex );
    }
  }
  //val = ""; 
  val = stringbuilder();
 
  
  if (boxType <> "" AND boxSize <> "" AND transport <> "" ){
    
    indexVal = atoi(ret);
    // Construct the string to be added to mainStringData
    
    sbappend(val, boxType, "**" ,boxSize, "**" , weightInGram, "**", string(atoi(qty)), "**" , string(atoi(eachBoxPrice)), "**" , deliveryType[indexVal], "**", deliveryFee[indexVal], "**" , substring( datetostr( expected_Date[indexVal] ), 0, -9), "**" , string( atoi(totalPrice) + atoi(deliveryFee[indexVal] ) ));
    //val = boxType + "**" + boxSize + "**" + weightInGram + "**" + string(atoi(qty)) + "**" + string(atoi(eachBoxPrice)) + "**" + deliveryType[indexVal] + "**" + deliveryFee[indexVal] + "**" + substring( datetostr( expected_Date[indexVal] ), 0, -9) + "**" + string( atoi(totalPrice) + atoi(deliveryFee[indexVal] ) );
  }
   sbToString = sbtostring(val);
  // Add item info to mainStringData if it does not already exist
  if (findinarray( mainStringData, sbToString ) == -1 ) {

    append( mainStringData, sbToString );
  }

result = join( mainStringData, "$$" );
return result;
// This newly added line
