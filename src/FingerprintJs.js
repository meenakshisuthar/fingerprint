import React, { useState, useEffect } from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';

const FingerprintJs = () => {
    const[fingerprintData, setFingerprintData] = useState(null);

    useEffect(() =>{
        const loadFingerprint = async()=>{
        try{const fpPromise = FingerprintJS.load({apiKey: 'SJdX4T7lVo0Le18aWen0'});
        const fp = await fpPromise;
        const result = await fp.get();
        setFingerprintData(result);
        console.log(result)
      }catch (error) {
        console.error('Error loading fingerprint data:', error);
      }
        };
        loadFingerprint();
    },[])
    if (!fingerprintData) {
        return <p>Loading fingerprint...</p>;
    }
   
  const { visitorId, confidence, meta, visitorFound } = fingerprintData;
  return (
    <div style={{ fontFamily: 'monospace', color: '#ffffff', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', width: '80%', margin: 'auto', marginTop: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Browser Fingerprint Pro</h1>
      <div>
       <p><strong>Fingerprint ID:</strong> {visitorId}</p>
        <p><strong>Visitor Found:</strong> {visitorFound ? 'Yes' : 'No'}</p>
        <p><strong>Confidence Score:</strong> {confidence.score}</p>
        <p><strong>Library Version:</strong> {meta.version}</p>
      </div>
    </div>
  )
}

export default FingerprintJs
