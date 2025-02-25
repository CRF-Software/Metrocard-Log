import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Configure Amplify with your AWS settings
Amplify.configure(awsconfig);

import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { generateClient } from "aws-amplify/api";
const client = generateClient();
import { createMetroCard } from "./graphql/mutations";

const MetroCardTracker = () => {
  // State to track the transaction type (issue or return)
  const [transactionType, setTransactionType] = useState('issue');

  // Form state for the input fields
  const [formData, setFormData] = useState({
    unit: "",
    fullName: "",
    caresCase: "",
    metroCardSerial: "",
    dateIssued: "",
    dateReturned: "",
    signature: "",
  });

  // Handle changes to each input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send.
    // Include the transactionType, and only send the appropriate date field.
    const inputData = {
      ...formData,
      transactionType,
    };

    if (transactionType === 'issue') {
      delete inputData.dateReturned;
    } else {
      delete inputData.dateIssued;
    }

    try {
      const response = await client.graphql({
        query: createMetroCard,
        variables: { input: inputData },
      });
      console.log("GraphQL response:", response);
      alert("Data saved to DynamoDB!");
      // Reset form state after submission
      setFormData({
        unit: "",
        fullName: "",
        caresCase: "",
        metroCardSerial: "",
        dateIssued: "",
        dateReturned: "",
        signature: "",
      });
    } catch (error) {
      console.error("Error saving to DynamoDB", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-xl font-bold text-center">
            Metro Card Log
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Transaction Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Transaction Type
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  transactionType === 'issue'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => setTransactionType('issue')}
              >
                Card Issuance
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${
                  transactionType === 'return'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => setTransactionType('return')}
              >
                Card Return
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Unit</label>
              <input
                type="text"
                name="unit"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter unit"
                value={formData.unit}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                CARES Case #
              </label>
              <input
                type="text"
                name="caresCase"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter CARES case number"
                value={formData.caresCase}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Metro Card Serial #
              </label>
              <input
                type="text"
                name="metroCardSerial"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter metro card serial number"
                value={formData.metroCardSerial}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {transactionType === 'issue'
                  ? 'Date Issued'
                  : 'Date Returned'}
              </label>
              <input
                type="date"
                name={transactionType === 'issue' ? "dateIssued" : "dateReturned"}
                className="w-full p-2 border rounded-lg"
                value={
                  transactionType === 'issue'
                    ? formData.dateIssued
                    : formData.dateReturned
                }
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Signature (Full Name)
              </label>
              <input
                type="text"
                name="signature"
                className="w-full p-2 border rounded-lg"
                placeholder="Type full name as signature"
                value={formData.signature}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6"
            >
              {transactionType === 'issue' ? 'Issue Card' : 'Return Card'}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetroCardTracker;
