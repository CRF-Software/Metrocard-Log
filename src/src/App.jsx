import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"; 



const MetroCardTracker = () => {
  const [transactionType, setTransactionType] = useState('issue');

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-xl font-bold text-center">Metro Card Log</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Transaction Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Transaction Type</label>
            <div className="flex gap-4">
              <button
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Unit</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter unit"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">CARES Case #</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter CARES case number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Metro Card Serial #</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter metro card serial number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {transactionType === 'issue' ? 'Date Issued' : 'Date Returned'}
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Signature (Full Name)</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Type full name as signature"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6">
              {transactionType === 'issue' ? 'Issue Card' : 'Return Card'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetroCardTracker;