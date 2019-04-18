import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the extraLongFactorials function below.
     public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        BigInteger f=new BigInteger("1");
        String s=""+n;
        BigInteger t=new BigInteger(s);
        while(!t.equals(new BigInteger("1"))){
            f=f.multiply(t);
            t=t.subtract(BigInteger.ONE);
        }
        System.out.println(f);
    }
}

