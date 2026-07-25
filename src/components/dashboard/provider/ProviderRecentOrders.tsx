"use client";

interface ProviderRecentOrdersProps {
  orders: any[];
}

export default function ProviderRecentOrders({
  orders,
}: ProviderRecentOrdersProps) {
  return (
    <section className="rounded-2xl border bg-card p-6">

      {/* ================= Header ================= */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Recent Orders
        </h2>

        <p className="text-sm text-muted-foreground">
          Latest rental requests from customers.
        </p>

      </div>

      {/* ================= Empty State ================= */}

      {orders.length === 0 ? (
        <div className="rounded-xl border border-dashed py-12 text-center">

          <p className="text-muted-foreground">
            No recent orders found.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {orders.map((order: any) => (

            <div
              key={order.id}
              className="flex flex-col gap-4 rounded-xl border p-5 transition hover:bg-muted/40 md:flex-row md:items-center md:justify-between"
            >

              {/* Customer & Gear */}

              <div>

                <h3 className="font-semibold">
                  {order.customer?.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {order.rentalItems
                    ?.map(
                      (item: any) =>
                        item.gearItem?.name
                    )
                    .join(", ")}
                </p>

              </div>

              {/* Status & Amount */}

              <div className="text-left md:text-right">

                <p className="font-medium">
                  {order.status}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  ৳
                  {Number(
                    order.payment?.amount ?? 0
                  ).toLocaleString()}
                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}