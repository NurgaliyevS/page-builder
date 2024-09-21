const UpgradeModal = () => (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="fixed inset-0 bg-neutral-focus/30 backdrop-blur-sm"></div>
    <div className="flex min-h-full items-center justify-center p-4">
      <div className="relative w-full max-w-xl transform space-y-6 overflow-visible rounded-3xl bg-neutral p-10 text-center align-middle text-neutral-content shadow-xl transition-all md:space-y-8 md:p-20">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Upgrade now to make your page live.
        </h2>
        <div className="mx-auto max-w-xs text-neutral-content/90 md:text-lg">
          Unlock the full potential of your page and go live in seconds.
        </div>
        <a
          className="btn-primary btn-wide btn shadow-lg"
          href="/#pricing"
          tabIndex="0"
        >
          Publish my SubPage
        </a>
      </div>
    </div>
  </div>
);

export default UpgradeModal;
