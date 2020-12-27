const isValidNamespace = R.either(
	R.o(R.isNil, R.prop('namespace')),
	R.o(R.either(R.isNil, R.equals(R.prop('namespace'))), getNewNamespace);
	