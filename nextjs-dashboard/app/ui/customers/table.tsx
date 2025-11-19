import Image from 'next/image';
import type { Customer } from '@/app/lib/definitions';

export default function CustomersTable({
  customers,
}: {
  customers: Customer[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          alt={`${customer.name}'s profile`}
                          className="rounded-full"
                          width={28}
                          height={28}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {customer.email}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
