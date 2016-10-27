function xor_encrypt(str, key){
  var res = '';
  for(var i=0; i<str.length; i++) {
    if(i>key.length-1) {
      k = i%key.length;
    } else {
      k = i;
    }
    res = res + String.fromCharCode(str.charCodeAt(i)^key.charCodeAt(k));
  }  
  return res
}

exports.xor = xor_encrypt;