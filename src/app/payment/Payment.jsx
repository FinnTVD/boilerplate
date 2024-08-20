'use client'

import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {SHA256} from 'crypto-js'
import {env} from '@/lib/environment'

// TransactionType=SALE&PymtMethod=CC&ServiceID=FY&PaymentID=A3BHPF20171001018074
// &OrderNumber=A3BHPF&PaymentDesc=-
// &MerchantReturnURL=S2S&Amount=299.48&CurrencyCode=MYR&HashValue=D8374858C6D7D
// EAF12E1EDA44859C01AAF189197314CC662ACF0B0BB2D742D76&CustIP=-&CustName=-
// &CustEmail=-&CustPhone=-&Cardholder=TESTER
// &CardNo=379186123459794&CardExp=202012&CardCVV2=1234&
// ECI=05&CAVV=AAABA2dGFgAAAAABEUYWAAAAAAA=&
// 3DXID=ejU4ZlB0Q2NmTUpQdndtdGxHWDA=

// Hash Key = Password + ServiceID + PaymentID + MerchantReturnURL +
// MerchantApprovalURL + MerchantUnApprovalURL + MerchantCallBackURL + Amount +
// CurrencyCode + CustIP + PageTimeout + CardNo + Token + RecurringCriteria

// Merchant ID: sit
// Merchant Password: sit12345

// Test Cards
// VISA: 4444333322221111
// MasterCard: 5555444433332222
// Expiry Date: any value
// CVV2: any value
export default function Payment() {
  const router = useRouter()
  const [ip, setIp] = useState('')
  const PageTimeout = '600'

  const getIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      if (data) {
        setIp(data.ip)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getIp()
  }, [])
  function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000)
  }
  const timeStampNow = getCurrentTimestamp()
  function handleHashValue() {
    if (!ip) return
    const Password = 'sit12345'
    const ServiceID = 'sit'
    const PaymentID = `JENHOTVD${timeStampNow}`
    const MerchantReturnURL = env.DOMAIN + '/payment'
    const Amount = '100.00'
    const CurrencyCode = 'MYR'
    const CustIP = ip
    const HashKey =
      Password +
      ServiceID +
      PaymentID +
      MerchantReturnURL +
      Amount +
      CurrencyCode +
      CustIP +
      PageTimeout
    return SHA256(HashKey).toString()
  }

  function handlePayment() {
    const hashValue = handleHashValue()
    const api = `https://pay.e-ghl.com/IPGSG/Payment.aspx?TransactionType=SALE&PymtMethod=ANY&ServiceID=sit&PaymentID=JENHOTVD${timeStampNow}&OrderNumber=JENHOTVD&PaymentDesc=tvdtest&MerchantName=TVD&MerchantReturnURL=${
      env.DOMAIN + '/payment'
    }&Amount=100.00&CurrencyCode=MYR&HashValue=${hashValue}&CustIP=${ip}&CustName=tvd&CustEmail=finnit.th@gmail.com&CustPhone=0338277705&PageTimeout=${PageTimeout}`
    console.log(api)
    router.push(api)
  }

  return (
    <div className='h-screen flex justify-center items-center w-full'>
      <button
        onClick={handlePayment}
        className='h-[2.5rem] w-[12rem] rounded-xl flex justify-center items-center'
      >
        Payment
      </button>
    </div>
  )
}
