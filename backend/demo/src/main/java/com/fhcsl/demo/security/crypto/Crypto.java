package com.fhcsl.demo.security.crypto;

import java.security.Key;
import java.security.KeyPair;
import java.security.KeyPairGenerator;

import javax.crypto.Cipher;

public class Crypto {

    public static KeyPair generateKeyPair() throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048); 

        return keyPairGenerator.generateKeyPair();
    }

    public static byte[] encryptRSA(String plainText) {

		byte[] cipherBytes = null;

		try {
            KeyPair keyPair = generateKeyPair();
            Cipher cipher = Cipher.getInstance("RSA");
			byte[] plainBytes = plainText.getBytes();
			cipher.init(Cipher.ENCRYPT_MODE, keyPair.getPublic());
			cipherBytes = cipher.doFinal(plainBytes);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return cipherBytes;
	}

	public static byte[] decryptRSA(Key privateKey, byte[] cipherBytes) {

		Cipher decryptCipher = null;
		byte[] decryptedBytes = null;

		try {
			decryptCipher = Cipher.getInstance("RSA");
			decryptCipher.init(Cipher.DECRYPT_MODE, privateKey);
			decryptedBytes = decryptCipher.doFinal(cipherBytes);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return decryptedBytes;
	}
    
}